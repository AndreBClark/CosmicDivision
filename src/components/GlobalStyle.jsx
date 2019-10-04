import { createGlobalStyle } from "styled-components"
import theme from "../../config/theme"

const GlobalStyle = createGlobalStyle`
html {
  min-height: 100%;
}
body {
  font-family: ${theme.fontFamily.sans};
  background-color: ${theme.colors.bg};
  box-sizing: border-box;
  margin: 0;
  font-size: ${theme.baseFontSize}
}
* {
  box-sizing: inherit;
}

*::selection {
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.bg};
}
`
export default GlobalStyle
