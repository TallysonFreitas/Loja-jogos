import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Product/style'

export const Container = styled.section<Omit<Props, 'title' | 'game'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'black' ? cores.preto : cores.cinza};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'gray' ? cores.preto : cores.cinza};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
