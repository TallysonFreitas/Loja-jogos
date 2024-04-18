import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './style'

import logo from '../../assets/images/logo.svg'
import cartIcon from '../../assets/images/carrinho.svg'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const abreCarrinho = () => dispatch(openCart())

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to={'/'}>
            <img src={logo} alt="" />
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="clique aqui para acessar a página de categorias"
                  to={'/categories'}
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a secao de em breve"
                  to="/#coming-soon"
                >
                  Novidades
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a secao de promocoes"
                  to="/#on-sale"
                >
                  Promocoes
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={abreCarrinho}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              title="clique aqui para acessar a página de categorias"
              to={'/categories'}
              onClick={() => {
                setIsMenuOpen(false)
              }}
            >
              Categorias
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a secao de em breve"
              to="/#coming-soon"
              onClick={() => {
                setIsMenuOpen(false)
              }}
            >
              Novidades
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              title="Clique aqui para acessar a secao de promocoes"
              to="/#on-sale"
              onClick={() => {
                setIsMenuOpen(false)
              }}
            >
              Promocoes
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}
export default Header
