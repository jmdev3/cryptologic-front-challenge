import axios from 'api'

const defaultParams = {
  key: process.env.NEXT_PUBLIC_COBALENT_KEY,
  format: 'JSON',
  'quote-currency': 'USD',
  'no-logs': true,
}

type Params = {
  'page-number': number,
  'page-size': number,
  'block-signed-at-asc': boolean,
}

export const getTransactions = (address: string, params: Params) =>
  axios.get(
    `https://api.covalenthq.com/v1/1/address/${address}/transactions_v2/`,
    {
      params: {
        ...params,
        ...defaultParams,
      },
    }
  )
