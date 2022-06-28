import axios from 'api'

const defaultParams = {
  key: process.env.NEXT_PUBLIC_COBALENT_KEY,
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
