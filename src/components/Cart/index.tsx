import Button from '../Button'
import Tag from '../Tag'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCart, remove } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './style'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCarrinho = () => dispatch(closeCart())
  const getTotalPrice = () => {
    return items.reduce((acc, curre) => acc + curre.prices.current!, 0)
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <S.CartContainer className={isOpen === true ? 'visivel' : ''}>
      <S.Overlay onClick={closeCarrinho} />
      <S.SideBar>
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
          Total de {parseToBrl(getTotalPrice())}
          <span>em ate 6x sem juros</span>
        </S.Textos>
        <Button type="button" title="clique aqui para continuar com a compra">
          Continuar com a compra
        </Button>
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
