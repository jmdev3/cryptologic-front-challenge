import { Button, Table } from 'antd'
import { SortOrder } from 'antd/lib/table/interface'
import { ethers } from 'ethers'
import { observer } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import moment from 'moment'
import React, { useMemo } from 'react'
import { useMst } from 'stores'
import styled from 'styled-components'
import parseLongHex from 'utils/parseLongHex'

const Wrapper = styled.div`
  overflow: auto;
`

const PaginationButtons = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;

  button {
    margin-left: 12px;
  }
`

const columns = (sort: SortOrder) => [
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
    render: (value: string) =>
      value ? `ETH ${ethers.utils.formatEther(value)}` : ' - ',
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
    sorter: true,
    sortOrder: sort,
    showSorterTooltip: false,
  },
]

const TransactionsTable: React.FC = () => {
  const state = useMst()

  const memoColumns = useMemo(
    () => columns(state.transations.block_signed_at_asc ? 'ascend' : 'descend'),
    [state.transations.block_signed_at_asc]
  )

  return (
    <Wrapper>
      <Table
        dataSource={getSnapshot(state.transations).transactions}
        columns={memoColumns}
        loading={state.transations.loading}
        pagination={false}
        size="middle"
        onChange={state.transations.sortChange}
      />

      <PaginationButtons>
        Page: {state.transations.page_number}
        <Button
          disabled={state.transations.page_number === 0}
          onClick={state.transations.prevPage}
          type="primary"
        >
          Prev
        </Button>
        <Button
          disabled={!state.transations.has_more}
          onClick={state.transations.nextPage}
          type="primary"
        >
          Next
        </Button>
      </PaginationButtons>
    </Wrapper>
  )
}

export default observer(TransactionsTable)
