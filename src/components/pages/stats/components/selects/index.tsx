import { Select } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { useMst } from 'stores'
import { supportedTokens } from 'stores/stats'
import styled from 'styled-components'

const { Option } = Select

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 12px;

  .ant-select:first-of-type {
    margin-right: 12px;
  }
`

const Selects: React.FC = () => {
  const state = useMst()

  function onTokenChange(contractAddress: string) {
    state.stats.setContractAddress(contractAddress)
  }

  function onRangeTimeChange(range: 'day' | 'week' | 'month' | 'year') {
    state.stats.setRange(range)
  }

  return (
    <Wrapper>
      <Select value={state.stats.contractAddress} onChange={onTokenChange}>
        {supportedTokens.map((e) => (
          <Option value={e.contractAddress} key={e.contractAddress}>
            {e.name} ({e.symbol})
          </Option>
        ))}
      </Select>

      <Select value={state.stats.range} onChange={onRangeTimeChange}>
        <Option value="day">Last Day</Option>
        <Option value="week">Last week</Option>
        <Option value="month">Last month</Option>
        <Option value="year">Last year</Option>
      </Select>
    </Wrapper>
  )
}

export default observer(Selects)
