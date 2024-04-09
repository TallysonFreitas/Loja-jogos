import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#eeeeee',
  preto: '#111',
  cinza: '#333',
  verde: '#10ac84'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Roboto, sans-serif;
  }

  body{
    background-color:${cores.preto};
    color:${cores.branco};
  }
`
