import { Imagem, Precos, Titulo } from './style'
import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>carregando</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game?.prices.old)}</span>
            <br />
            por apenas {formataPreco(game?.prices.current)}
          </Precos>
        </div>
        <Button
          onClick={() => {
            console.log('ola')
          }}
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
