import Product from '../Product'

import { Game } from '../../pages/Home'
import { parseToBrl } from '../../utils'

import * as S from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
  game: Game[]
  id: string
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
      tags.push(parseToBrl(game.prices.current))
    }
    return tags
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <S.List>
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
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
