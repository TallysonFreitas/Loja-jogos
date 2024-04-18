import Tag from '../Tag'
import Button from '../Button'

import { parseToBrl } from '../../utils'
import { useDispatch } from 'react-redux'
import { add, openCart } from '../../store/reducers/cart'

import * as S from './style'
type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(game))
    dispatch(openCart())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <div>
            <p>
              {game.prices.discount && (
                <span>De {parseToBrl(game.prices.old)}</span>
              )}
              {game.prices.current && (
                <>Por {parseToBrl(game.prices.current)}</>
              )}
            </p>

            {game.prices.current && (
              <Button
                title="clique aqui para adicionar ao carrinho"
                variant="primary"
                type="button"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
            )}
          </div>
        </S.Infos>
      </div>
    </S.Banner>
  )
}
export default Hero
