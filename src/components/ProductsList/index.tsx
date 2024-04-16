import { Game } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
  game: Game[]
  id: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ title, background, game, id }: Props) => {
  const getNameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`-${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }
    return tags
  }

  return (
    <Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {game.map((each) => {
            return (
              <li key={each.id}>
                <Product
                  category={each.details.category}
                  description={each.description}
                  image={each.media.thumbnail}
                  infos={getNameTags(each)}
                  system={each.details.system}
                  title={each.name}
                  id={each.id}
                />
              </li>
            )
          })}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
