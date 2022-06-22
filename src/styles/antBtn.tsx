import { createGlobalStyle } from 'styled-components'

const AntBtn = createGlobalStyle`
  .ant-btn {
    border-radius: 8px;
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: 700;
    
    span {
      margin: 0 12px;
      color: ${(props) => props.theme.colors.white};
    }
  }

  .ant-btn:disabled,
  .ant-btn[disabled] {
    background: ${(props) => props.theme.colors.grey};
  }

  .ant-btn-primary {
    background: ${(props) => props.theme.colors.buttonPrimary};
    border: transparent;
  }

  .ant-btn-default {
    background: ${(props) => props.theme.colors.buttonDefault};
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

  .ant-btn-default:hover {
    background: ${(props) => props.theme.colors.buttonPrimary} !important;
  }
`

export default AntBtn
