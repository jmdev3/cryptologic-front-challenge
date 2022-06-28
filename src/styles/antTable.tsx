import { createGlobalStyle } from 'styled-components'

const AntTable = createGlobalStyle`
  .ant-table-content {
    background: ${(props) => props.theme.colors.backgroundSecondary};
  }

  .ant-table-thead {
    position: relative;

    &:before {
      content: '';
      z-index: 2;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        to right,
        ${(props) => props.theme.colors.backgroundSecondary},
        #0f60ff,
        #8743ff,
        ${(props) => props.theme.colors.backgroundSecondary}
      );
    }
  
    .ant-table-cell {
      background: ${(props) => props.theme.colors.backgroundSecondary};
      color: ${(props) => props.theme.colors.primary};
    }

    .ant-table-column-sort {
      background: ${(props) =>
        props.theme.colors.backgroundSecondary} !important;
    }
  }

  .ant-table-tbody {
    .ant-table-cell {
      background: ${(props) => props.theme.colors.backgroundPrimary};
      color: ${(props) => props.theme.colors.primary};
    }
    .ant-table-cell-row-hover {
      background: ${(props) =>
        props.theme.colors.backgroundSecondary} !important;
    }
  }
`

export default AntTable
