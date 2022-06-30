import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import { useMst } from 'stores'
import styled from 'styled-components'

import Chart from './components/chart'
import Selects from './components/selects'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  color: ${(props) => props.theme.colors.primary};
`

const Stats: React.FC = () => {
  const state = useMst()

  useEffect(() => {
    state.stats.getTokenPricesMethod()
  }, [state.stats])

  return (
    <Wrapper>
      <Selects />
      <Chart />
    </Wrapper>
  )
}

export default observer(Stats)
