import { pick } from 'lodash'
import { flow, Instance, types } from 'mobx-state-tree'
import { getTokenPrices } from 'services/tokenPrices'

export const supportedTokens = [
  {
    contractAddress: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    name: 'BNB',
    symbol: 'BNB',
  },
  {
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    name: 'Tether USD',
    symbol: 'USDT ',
  },
  {
    contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    name: 'USD Coin',
    symbol: 'USDC',
  },
  {
    contractAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    name: 'Dai Stablecoin',
    symbol: 'DAI',
  },
  {
    contractAddress: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
    name: 'SHIBA INU',
    symbol: 'SHIB',
  },
  {
    contractAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    name: 'Wrapped BTC',
    symbol: 'WBTC',
  },
]

export const Price = types.model({
  date: types.string,
  price: types.number,
})

export const StatsStore = types
  .model({
    prices: types.array(Price),
    contractAddress: '',

    loading: false,
  })
  .actions((self) => {
    const getTokenPricesMethod = flow(function* getTokenPricesMethod() {
      try {
        self.loading = true

        const response = yield getTokenPrices(
          supportedTokens[0].contractAddress
        )

        self.prices.replace(
          response.data.data[0].items.map((e: unknown) =>
            pick(e, ['price', 'date'])
          )
        )
      } catch (error) {
        console.log('> getTokenPricesMethod error: ', error)
      } finally {
        self.loading = false
      }
    })

    return {
      getTokenPricesMethod,
    }
  })

export type IStatsStore = Instance<typeof StatsStore>
export type IPrice = Instance<typeof Price>
