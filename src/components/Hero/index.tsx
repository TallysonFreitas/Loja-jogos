import { Banner, Infos } from './style'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'
import { useDispatch } from 'react-redux'
import { add, openCart } from '../../store/reducers/cart'

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
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <div>
            <p>
              {game.prices.discount && (
                <span>De {formataPreco(game.prices.old)}</span>
              )}
              {game.prices.current && (
                <>Por {formataPreco(game.prices.current)}</>
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
        </Infos>
      </div>
    </Banner>
  )
}
export default Hero
