import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCart, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './style'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const closeCarrinho = () => dispatch(closeCart())

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout'), dispatch(closeCart())
  }

  return (
    <S.CartContainer className={isOpen === true ? 'visivel' : ''}>
      <S.Overlay onClick={closeCarrinho} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((each) => (
                <S.CartItem key={each.id}>
                  <img src={each.media.thumbnail} alt={each.name} />
                  <div>
                    <h3>{each.name}</h3>
                    <Tag>{each.details.category}</Tag>
                    <Tag>{each.details.system}</Tag>
                    <span>{parseToBrl(each.prices.current)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      removeItem(each.id)
                    }}
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Textos>
              Total de {parseToBrl(getTotalPrice(items))}
              <span>em ate 6x sem juros</span>
            </S.Textos>
            <Button
              type="button"
              title="clique aqui para continuar com a compra"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto paraa
            continuar com a compra
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
