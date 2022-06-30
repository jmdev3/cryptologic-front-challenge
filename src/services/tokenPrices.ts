import axios from 'api'

const defaultParams = {
  key: process.env.NEXT_PUBLIC_COBALENT_KEY,
  format: 'JSON',
  'quote-currency': 'USD',
}

type Params = {
  from: string,
  to: string,
}

export const getTokenPrices = (address: string, params: Params) =>
  axios.get(
    `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/${address}/`,
    {
      params: {
        ...params,
        ...defaultParams,
      },
    }
  )
