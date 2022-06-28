import axios from 'api'

const params = {
  key: 'ckey_73c2af902af04adfa2b79552f92',
  format: 'JSON',
  'quote-currency': 'USD',
  'block-signed-at-asc': false,
  'no-logs': true,
  'page-number': 0,
  'page-size': 10,
}

export const getTransactions = (address: string) =>
  axios.get(
    `https://api.covalenthq.com/v1/1/address/${address}/transactions_v2/`,
    { params }
  )
