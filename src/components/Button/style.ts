import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branco)};
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
