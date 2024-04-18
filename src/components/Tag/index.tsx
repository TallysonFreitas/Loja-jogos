import * as S from './style'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => (
  <S.TagContainer size={size}>{children}</S.TagContainer>
)

export default Tag
