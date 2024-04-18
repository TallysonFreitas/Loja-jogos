import { useEffect, useState } from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'

import * as S from './style'

import barCode from '../../assets/images/boleto.png'
import creditCard from '../../assets/images/cartao.png'
import { getTotalPrice, parseToBrl } from '../../utils'
import InputMask from 'react-input-mask'
import { clearCart } from '../../store/reducers/cart'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState<boolean>(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const [installments, setInstallments] = useState<Installment[]>([])

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const totalPrice = getTotalPrice(items)

  const mudaFormaPagamento = (e: boolean) => {
    setPayWithCard(e)
  }

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatorio'),
      email: Yup.string()
        .email('Email invalido')
        .required('O campo é obrigatorio'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatorio'),
      deliveryEmail: Yup.string()
        .email('Email invalido')
        .required('O campo é obrigatorio'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails sao diferentes')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: { email: values.deliveryEmail },
        payment: {
          installments: values.installments,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((each) => ({
          id: each.id,
          price: each.prices.current as number
        }))
      })
    }
  })

  useEffect(() => {
    const calculaInstallments = () => {
      const installmentsArray: Installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: parseToBrl(totalPrice / i)
        })
      }
      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculaInstallments())
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearCart())
    }
  }, [dispatch, isSuccess])

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isInvalid && isTouched

    return hasError
  }

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <Card title="Muito obrigado">
          <>
            <p>
              É com muita satisfação que informamos que recebemos seu pedido com
              sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum totam cupiditate deserunt consequatur beatae distinctio
              vel voluptatibus quas doloribus autem, blanditiis id! Odio aliquam
              autem quia sed quis assumenda, nulla illum laborum ducimus error
              accusantium harum tempora aliquid! Molestiae dolorum quis totam
              pariatur perspiciatis perferendis.
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobranca">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="email"
                    name="email"
                    value={form.values.email}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="cpf"
                    name="cpf"
                    value={form.values.cpf}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                    mask="999.999.999-99"
                  />
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                onClick={() => {
                  mudaFormaPagamento(false)
                }}
                type="button"
              >
                <img src={barCode} alt="Boleto" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                onClick={() => {
                  mudaFormaPagamento(true)
                }}
                type="button"
              >
                <img src={creditCard} alt="Cartao" />
                Cartao de crédito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartao
                        </label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">
                          CPF do titular do cartao
                        </label>
                        <InputMask
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          className={
                            checkInputHasError('cpfCardOwner') ? 'error' : ''
                          }
                          mask="999.999.999-99"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome no cartao</label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartao</label>
                        <InputMask
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mes do vencimento</label>
                        <InputMask
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano do cartao</label>
                        <InputMask
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          id="installments"
                          name="installments"
                          value={form.values.installments}
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((each) => (
                            <option
                              value={each.quantity}
                              key={each.quantity}
                            >{`${each.quantity}x de ${each.formattedAmount}`}</option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quae, nisi fuga delectus ducimus iste nam. Ipsa culpa ut
                    cumque dolore, iste sit tenetur, et, ea alias mollitia
                    similique assumenda earum sint consectetur itaque placeat
                    architecto corrupti ex incidunt cupiditate. Fugiat tenetur
                    dolores non sed molestias, similique quod cumque. Ratione
                    quisquam, iste optio odio ab harum vero hic culpa quo id!
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            onClick={form.handleSubmit}
            title="Clique aqui para finalizar compra"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
