import { createGlobalStyle } from 'styled-components'

const AntForm = createGlobalStyle`
  .ant-form-item-label>label {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fontSizes.xs};
  }

  .ant-form-item-required::before {
    content: none !important;
  }

  .ant-input {
    background: ${(props) => props.theme.colors.backgroundSecondary};
    border: transparent;
    border-radius: 8px;
    padding: 10px 10px;
    color: ${(props) => props.theme.colors.primary}; 
    font-size: ${(props) => props.theme.fontSizes.xs};

    .ant-input-suffix {
      svg {
        color: ${(props) => props.theme.colors.primary}; 
      }
    }
  }

  @keyframes autofill {
    100% {
      background: transparent;
      color: inherit;
    }
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 20px ${(props) =>
      props.theme.colors.light} inset !important;
    -webkit-box-shadow: 0 0 0 20px ${(props) =>
      props.theme.colors.light} inset !important;
    -webkit-text-fill-color: ${(props) =>
      props.theme.colors.primary} !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-animation: autofill 0s forwards !important;
    animation: autofill 0s forwards !important;
  }

  .ant-input-affix-wrapper>input.ant-input:focus {
    box-shadow: 0 0 0 20px ${(props) =>
      props.theme.colors.light} inset !important;
    -webkit-box-shadow: 0 0 0 20px ${(props) =>
      props.theme.colors.light} inset !important;
    -webkit-text-fill-color: ${(props) =>
      props.theme.colors.primary} !important;
  }

  .ant-input-status-error {
    background: ${(props) => props.theme.colors.backgroundSecondary} !important;
  }

  .ant-input-affix-wrapper-status-error {
    background: ${(props) => props.theme.colors.backgroundSecondary} !important;
  }

  .ant-select-selector {
    display: flex !important;
    align-items: center !important;
    height: 38px !important;
    background: ${(props) => props.theme.colors.backgroundSecondary} !important;
    border: none !important;
    border-radius: 8px !important;
    color: ${(props) => props.theme.colors.primary} !important;
  }
  
  .ant-select-arrow {
    color: ${(props) => props.theme.colors.primary} !important;
  }

  .ant-select-dropdown {
    background: ${(props) => props.theme.colors.backgroundSecondary} !important;
    box-shadow: 0 4px 4px 0 ${(props) => props.theme.colors.black};
  }

  .ant-select-item {
    color: ${(props) => props.theme.colors.primary} !important;
    border-radius: 8px !important;
  }

  .ant-select-item-option-selected, .ant-select-item-option-active {
    background: ${(props) => props.theme.colors.backgroundPrimary} !important;
  }
`

export default AntForm
