import axios from 'api'

const defaultParams = {
  key: 'ckey_73c2af902af04adfa2b79552f92',
  format: 'JSON',
  'quote-currency': 'USD',
  'no-logs': true,
}

export const getTransactions = (address: string, params: any) =>
  axios.get(
    `https://api.covalenthq.com/v1/1/address/${address}/transactions_v2/`,
    {
      params: {
        ...params,
        ...defaultParams,
      },
    }
  )
