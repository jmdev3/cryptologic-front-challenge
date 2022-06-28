import { Col, Menu, Row, Switch } from 'antd'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMst } from 'stores'
import styled from 'styled-components'

interface ILayout {
  children: React.ReactNode;
}

const mapRoutes: { [key: string]: string } = {
  '/': 'transactions',
  '/transactions': 'transactions',
  '/stats': 'stats',
}

const Header = styled.header`
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

  .ant-menu {
    width: 227px;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`

const LogoCol = styled(Col)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const NavCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SwitchCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Layout: React.FC<ILayout> = ({ children }) => {
  const state = useMst()
  const router = useRouter()

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
        <Row>
          <LogoCol xs={24} sm={8}>
            <LogoWrapper>
              <Image src="/assets/logo.png" alt="logo" width={40} height={40} />
              &nbsp;&nbsp;Challenge
            </LogoWrapper>
          </LogoCol>

          <NavCol xs={24} sm={8}>
            <div>
              <Menu
                mode="horizontal"
                selectedKeys={[mapRoutes[router.pathname]]}
              >
                <Menu.Item key="transactions">
                  <Link href="/transactions">
                    <a>Transactions</a>
                  </Link>
                </Menu.Item>
                <Menu.Item key="stats">
                  <Link href="/stats">
                    <a>Stats</a>
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
          </NavCol>

          <SwitchCol xs={24} sm={8}>
            <Switch
              checkedChildren="Dark"
              unCheckedChildren="Light"
              checked={state.theme === 'dark'}
              onClick={handleThemeChange}
            />
          </SwitchCol>
        </Row>
      </Header>

      <section>{children}</section>
    </>
  )
}

export default Layout
