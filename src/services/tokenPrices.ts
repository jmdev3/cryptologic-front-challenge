import axios from 'api'

const defaultParams = {
  key: process.env.NEXT_PUBLIC_COBALENT_KEY,
  format: 'JSON',
  'quote-currency': 'USD',
  from: '2022-01-01',
  to: '2022-02-01',
}

export const getTokenPrices = (address: string) =>
  axios.get(
    `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/${address}/`,
    {
      params: {
        // ...params,
        ...defaultParams,
      },
    }
  )
