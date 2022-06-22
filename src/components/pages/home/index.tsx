import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 600px;
  color: ${(props) => props.theme.colors.primary};
`

const Home: React.FC = () => {
  return <Wrapper>Home</Wrapper>
}

export default observer(Home)
