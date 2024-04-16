import { Link } from 'react-router-dom'

import { CartButton, HeaderBar, LinkItem, Links } from './style'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const abreCarrinho = () => dispatch(openCart())

  return (
    <HeaderBar>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to={'/categories'}>Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="#">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="#">Promocoes</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={abreCarrinho}>
        {items.length} - produto(s) <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}
export default Header
