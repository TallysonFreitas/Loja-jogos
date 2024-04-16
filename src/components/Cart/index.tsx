import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Quantity,
  SideBar,
  Textos
} from './style'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCart, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

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
    <CartContainer className={isOpen === true ? 'visivel' : ''}>
      <Overlay onClick={closeCarrinho} />
      <SideBar>
        <ul>
          {items.map((each) => (
            <CartItem key={each.id}>
              <img src={each.media.thumbnail} alt={each.name} />
              <div>
                <h3>{each.name}</h3>
                <Tag>{each.details.category}</Tag>
                <Tag>{each.details.system}</Tag>
                <span>{formataPreco(each.prices.current)}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  removeItem(each.id)
                }}
              />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Textos>
          Total de {formataPreco(getTotalPrice())}
          <span>em ate 6x sem juros</span>
        </Textos>
        <Button type="button" title="clique aqui para continuar com a compra">
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
