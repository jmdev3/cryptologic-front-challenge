import { Switch } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import { useMst } from 'stores'
import styled from 'styled-components'

interface ILayout {
  children: React.ReactNode;
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: ${(props) => props.theme.colors.backgroundSecondary};
  box-shadow: 0px 10px 14px 0px ${(props) => props.theme.colors.boxShadow};
  padding: 14px 10px;
  margin-bottom: 20px;

  &:before {
    content: '';
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
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  color: ${(props) => props.theme.colors.primary};
`

const Section = styled.section``

const Footer = styled.footer``

const Layout: React.FC<ILayout> = ({ children }) => {
  const state = useMst()

  function handleThemeChange() {
    if (state.theme === 'dark') {
      return state.setTheme('light')
    }
    return state.setTheme('dark')
  }

  return (
    <>
      <Head>
        <title>Cryptologic challenge</title>
      </Head>

      <Header>
        <LogoWrapper>CRYPTOLOGIC CHALLENGE</LogoWrapper>

        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          checked={state.theme === 'dark'}
          onClick={handleThemeChange}
        />
      </Header>

      <Section>{children}</Section>

      <Footer></Footer>
    </>
  )
}

export default Layout
