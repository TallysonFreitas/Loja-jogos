import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/style'

export const Banner = styled.div`
  width: 100%;
  height: 480px;
  display: block;
  background-repeat: no repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  padding-top: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }

  &::after {
    position: absolute;
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preto};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
