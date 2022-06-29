import { Line } from '@ant-design/plots'
import { observer } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import React, { useEffect } from 'react'
import { useMst } from 'stores'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px 20px 20px;
  color: ${(props) => props.theme.colors.primary};
`

const Stats: React.FC = () => {
  const state = useMst()

  useEffect(() => {
    state.stats.getTokenPricesMethod()
  }, [state.stats])

  const config = {
    data: getSnapshot(state.stats).prices,
    xField: 'date',
    yField: 'price',
    yAxis: {
      tickCount: 6,
    },
    smooth: true,
  }

  return (
    <Wrapper>
      <Line {...config} />
    </Wrapper>
  )
}

export default observer(Stats)
