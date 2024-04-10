import Tag from '../Tag'
import { Card, Descricao, Titulo } from './style'

const Product = () => (
  <Card>
    <img src="https://placehold.it/222x250" alt="" />
    <Titulo>nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum
      eum cum maiores aperiam quas? Consequatur suscipit dolor consequuntur
      mollitia. Doloremque quasi at deserunt ipsa! Porro officia in ullam
      eveniet.
    </Descricao>
  </Card>
)

export default Product
