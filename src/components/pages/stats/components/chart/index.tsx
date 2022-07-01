import { Line } from '@ant-design/plots'
import { observer } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import React from 'react'
import { useMst } from 'stores'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: 10px;
  box-shadow: 0px 10px 14px 0px ${(props) => props.theme.colors.boxShadow};
`

const Chart: React.FC = () => {
  const state = useMst()

  return (
    <Wrapper>
      <Line
        data={getSnapshot(state.stats).prices}
        xField="date"
        yField="price"
        yAxis={{
          tickCount: 6,
          min: state.stats.minPrice,
          max: state.stats.maxPrice,
          grid: {
            line: {
              style: {
                opacity: 0.2,
                stroke: state.theme === 'dark' ? 'white' : 'dark'
              }
            }
          }
        }}
        smooth={true}
        padding="auto"
        tooltip={{
          customItems: (items) =>
            items.map((i) => ({ ...i, value: `USD ${i.value}` })),
        }}
        loading={state.stats.loading}
        lineStyle={{
          stroke: '#8743ff',
          shadowColor: 'green'
        }}
      />
    </Wrapper>
  )
}

export default observer(Chart)
