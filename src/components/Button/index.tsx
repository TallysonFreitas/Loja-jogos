import { ButtonContainer, ButtonLink } from './style'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick: () => void
  children: string
}

const Button = ({ type, children, title, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} type="button" title={title} onClick={onClick}>
      {children}
    </ButtonLink>
  )
}

export default Button
