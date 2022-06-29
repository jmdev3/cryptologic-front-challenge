import { createGlobalStyle } from 'styled-components'

import AntBtn from './antBtn'
import AntForm from './antForm'
import AntTab from './antTab'
import AntTable from './antTable'

const GlobalStyle = createGlobalStyle`  
  * {
    font-family: 'Montserrat', sans-serif;
  }

  html,
  #__next {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    background: ${(props) => props.theme.colors.backgroundPrimary};
    transition: background-color 0.5s linear;
    overflow: auto;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 16px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    border-radius: 24px;
    border: 5px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.blue};
    border: 5px solid transparent;
    border-radius: 24px;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`

const GlobalWrapper = () => (
  <>
    <GlobalStyle />
    <AntBtn />
    <AntForm />
    <AntTab />
    <AntTable />
  </>
)

export default GlobalWrapper
