import { observer } from 'mobx-react'
import Image from 'next/image'
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

      <div style={{ width: 200, height: 200 }}>
        <Image
          width={200}
          height={200}
          src="https://ipfs.infura.io/ipfs/QmVni9tgPSnUfqXXLDyxsWepCUqMGKqLCMxP3fWeedU48b"
        />
      </div>
    </Wrapper>
  )
}

export default observer(Transactions)
