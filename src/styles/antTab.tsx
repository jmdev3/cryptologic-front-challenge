import { createGlobalStyle } from 'styled-components'

const AntTab = createGlobalStyle`
  .ant-menu {
    background: transparent;
  }

  .ant-menu-title-content {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: 600;
  }
`

export default AntTab
