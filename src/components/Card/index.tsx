import * as S from './style'

type Props = {
  title: string
  children: JSX.Element
}

const Card = ({ children, title }: Props) => (
  <S.Container>
    <h2>{title}</h2>
    {children}
  </S.Container>
)

export default Card
