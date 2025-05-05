import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
    line-height: 1.4;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme['gray-100']};
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`
