import { Table } from 'antd'
import { ethers } from 'ethers'
import { observer } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import moment from 'moment'
import React from 'react'
import { useMst } from 'stores'
import styled from 'styled-components'
import parseLongHex from 'utils/parseLongHex'

const Wrapper = styled.div`
  padding: 20px;
  overflow: auto;
`

const columns = [
  {
    title: 'tx_hash',
    dataIndex: 'tx_hash',
    key: 'tx_hash',
    render: (value: string) => parseLongHex(value),
  },
  {
    title: 'value',
    dataIndex: 'value',
    key: 'value',
    render: (value: string) => `ETH ${ethers.utils.formatEther(value)}`,
  },
  {
    title: 'value_quote',
    dataIndex: 'value_quote',
    key: 'value_quote',
    render: (value: string) => `USD ${value}`,
  },
  {
    title: 'gas_spent',
    dataIndex: 'gas_spent',
    key: 'gas_spent',
    render: (value: string) => `ETH ${ethers.utils.formatEther(value)}`,
  },
  {
    title: 'fees_paid',
    dataIndex: 'fees_paid',
    key: 'fees_paid',
    render: (value: string) => `ETH ${ethers.utils.formatEther(value)}`,
  },
  {
    title: 'from_address',
    dataIndex: 'from_address',
    key: 'from_address',
    render: (value: string) => parseLongHex(value),
  },
  {
    title: 'to_address',
    dataIndex: 'to_address',
    key: 'to_address',
    render: (value: string) => parseLongHex(value),
  },
  {
    title: 'block_height',
    dataIndex: 'block_height',
    key: 'block_height',
  },
  {
    title: 'block_signed_at',
    dataIndex: 'block_signed_at',
    key: 'block_signed_at',
    render: (value: string) => moment(value).format('DD/MM/YYYY hh:mm'),
  },
]

const TransactionsTable: React.FC = () => {
  const state = useMst()

  return (
    <Wrapper>
      <Table
        dataSource={getSnapshot(state.transations).transactions}
        columns={columns}
        loading={state.transations.loading}
        pagination={false}
        size="middle"
      />
    </Wrapper>
  )
}

export default observer(TransactionsTable)
