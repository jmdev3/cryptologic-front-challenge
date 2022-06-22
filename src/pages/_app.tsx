import 'antd/dist/antd.variable.min.css'

import { ConfigProvider } from 'antd'
import Layout from 'components/shared/layout'
import { reaction } from 'mobx'
import { observer } from 'mobx-react'
import type { AppProps } from 'next/app'
import React from 'react'
import { MobxProvider, mobxRootState } from 'stores'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles'

import theme from '../theme'

if (typeof window !== 'undefined') {
  ConfigProvider.config({
    theme: {
      primaryColor: theme[mobxRootState.theme].colors.blue,
    },
  })

  reaction(
    () => mobxRootState.theme,
    (newTheme) => {
      ConfigProvider.config({
        theme: {
          primaryColor: theme[newTheme].colors.blue,
        },
      })
    }
  )
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MobxProvider value={mobxRootState}>
        <ThemeProvider theme={theme[mobxRootState.theme]}>
          <ConfigProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <GlobalStyle />
          </ConfigProvider>
        </ThemeProvider>
      </MobxProvider>
    </>
  )
}

export default observer(MyApp)
