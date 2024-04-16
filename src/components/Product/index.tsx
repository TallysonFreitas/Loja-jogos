import Tag from '../Tag'
import { Card, Descricao, Infos, Titulo } from './style'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 92) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt="" />
      <Infos>
        {infos.map((each) => {
          return <Tag key={each}>{each}</Tag>
        })}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{`${getDescricao(description)}`}</Descricao>
    </Card>
  )
}

export default Product
