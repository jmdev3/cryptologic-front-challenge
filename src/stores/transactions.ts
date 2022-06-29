import { ethers } from 'ethers'
import { pick } from 'lodash'
import { flow, Instance, types } from 'mobx-state-tree'
import { getTransactions } from 'services/transactions'

export const Transaction = types.model({
  tx_hash: types.string,
  value: types.string,
  value_quote: types.number,
  gas_spent: types.number,
  fees_paid: types.maybeNull(types.string),
  from_address: types.string,
  to_address: types.string,
  block_height: types.number,
  block_signed_at: types.string,
})

export const TransactionsStore = types
  .model({
    transactions: types.array(Transaction),
    address: '',

    loading: false,
    has_more: false,
    page_number: 0,
    page_size: 10,
    block_signed_at_asc: false,
  })
  .actions((self) => {
    const getTransactionsMethod = flow(function* getTransactionsMethod() {
      try {
        self.loading = true

        const response = yield getTransactions(self.address, {
          'page-number': self.page_number,
          'page-size': self.page_size,
          'block-signed-at-asc': self.block_signed_at_asc,
        })

        self.transactions.replace(
          response.data.data.items.map((e: unknown) =>
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

        self.has_more = response.data.data.pagination.has_more
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

    const nextPage = () => {
      if (self.has_more) {
        self.page_number += 1
        getTransactionsMethod()
      }
    }

    const prevPage = () => {
      if (self.page_number > 0) {
        self.page_number -= 1
        getTransactionsMethod()
      }
    }

    const sortChange = () => {
      self.block_signed_at_asc = !self.block_signed_at_asc
      getTransactionsMethod()
    }

    return {
      getTransactionsMethod,
      setAddress,
      nextPage,
      prevPage,
      sortChange,
    }
  })

export type ITransaction = Instance<typeof Transaction>
export type ITransactionsStore = Instance<typeof TransactionsStore>
