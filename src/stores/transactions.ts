import { ethers } from 'ethers'
import { pick } from 'lodash'
import { flow, Instance, types } from 'mobx-state-tree'
import { getTransactions } from 'services/transactions'

export const Transaction = types.model({
  tx_hash: types.string,
  value: types.string,
  value_quote: types.number,
  gas_spent: types.number,
  fees_paid: types.string,
  from_address: types.string,
  to_address: types.string,
  block_height: types.number,
  block_signed_at: types.string,
})

export const TransactionsStore = types
  .model({
    transactions: types.array(Transaction),
    address: '0xa79E63e78Eec28741e711f89A672A4C40876Ebf3',

    loading: false,
    has_more: false,
    page_number: 0,
    page_size: 10,
  })
  .actions((self) => {
    const getTransactionsMethod = flow(function* getTransactionsMethod() {
      try {
        self.loading = true
        const result = yield getTransactions(self.address)
        self.transactions.replace(
          result.data.data.items.map((e: unknown) =>
            pick(e, [
              'tx_hash',
              'value',
              'value_quote',
              'gas_spent',
              'fees_paid',
              'from_address',
              'to_address',
              'block_height',
              'block_signed_at',
            ])
          )
        )
      } catch (error) {
        console.log('> getTransactionsMethod error: ', error)
      } finally {
        self.loading = false
      }
    })

    const setAddress = (address: string) => {
      if (ethers.utils.isAddress(address)) {
        self.address = address
        getTransactionsMethod()
      }
    }

    return {
      getTransactionsMethod,
      setAddress,
    }
  })

export type ITransaction = Instance<typeof Transaction>
