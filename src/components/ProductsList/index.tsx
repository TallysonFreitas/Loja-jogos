import { Game } from '../../models/Game'
import Product from '../Product'
import { Container, List } from './style'

export type Props = {
  title: string
  background: 'gray' | 'black'
  game: Game[]
}

const ProductsList = ({ title, background, game }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {game.map((each) => {
          return (
            <Product
              category={each.category}
              description={each.description}
              image={each.image}
              infos={each.infos}
              system={each.system}
              title={each.title}
              key={each.id}
            />
          )
        })}
      </List>
    </div>
  </Container>
)

export default ProductsList
