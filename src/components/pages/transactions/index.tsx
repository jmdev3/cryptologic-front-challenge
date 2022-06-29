import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'

import AddressInput from './components/addressInput'
import TransactionsTable from './components/transactionsTable'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`

const Transactions: React.FC = () => {
  return (
    <Wrapper>
      <AddressInput />
      <TransactionsTable />
    </Wrapper>
  )
}

export default observer(Transactions)
