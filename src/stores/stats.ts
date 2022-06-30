import { maxBy, minBy, pick, reverse } from 'lodash'
import { flow, Instance, types } from 'mobx-state-tree'
import moment from 'moment'
import { getTokenPrices } from 'services/tokenPrices'

export const supportedTokens = [
  {
    contractAddress: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    name: 'BNB',
    symbol: 'BNB',
    logo: 'https://logos.covalenthq.com/tokens/0xb8c77482e45f1f44de1745f52c74426c631bdd52.png',
  },
  {
    contractAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    name: 'Tether USD',
    symbol: 'USDT ',
    logo: 'https://logos.covalenthq.com/tokens/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
  },
  {
    contractAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    name: 'USD Coin',
    symbol: 'USDC',
    logo: 'https://logos.covalenthq.com/tokens/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
  },
  {
    contractAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    logo: 'https://logos.covalenthq.com/tokens/0x6b175474e89094c44da98b954eedeac495271d0f.png',
  },
  {
    contractAddress: '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE',
    name: 'SHIBA INU',
    symbol: 'SHIB',
    logo: 'https://logos.covalenthq.com/tokens/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png',
  },
  {
    contractAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    logo: 'https://logos.covalenthq.com/tokens/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png',
  },
]

export const Price = types.model({
  date: types.string,
  price: types.number,
})

export const StatsStore = types
  .model({
    prices: types.array(Price),
    contractAddress: supportedTokens[0].contractAddress,
    range: types.enumeration('range', ['day', 'week', 'month', 'year']),
    loading: false,
  })
  .views((self) => ({
    get minPrice(): number | undefined {
      if (self.prices.length > 0) {
        return minBy(self.prices, (e) => e.price)?.price
      }
      return 0
    },
    get maxPrice(): number | undefined {
      if (self.prices.length > 0) {
        return maxBy(self.prices, (e) => e.price)?.price
      }
      return 0
    },
  }))
  .actions((self) => {
    const getTokenPricesMethod = flow(function* getTokenPricesMethod() {
      try {
        self.loading = true

        const to = moment()
        const from = moment()

        if (self.range === 'day') {
          from.subtract(1, 'days')
          console.log(from, to)
        } else {
          from.startOf(self.range)
        }

        const response = yield getTokenPrices(self.contractAddress, {
          from: from.format('YYYY-MM-DD'),
          to: to.format('YYYY-MM-DD'),
        })

        self.prices.replace(
          reverse(
            response.data.data[0].items.map((e: unknown) =>
              pick(e, ['price', 'date'])
            )
          )
        )
      } catch (error) {
        console.log('> getTokenPricesMethod error: ', error)
      } finally {
        self.loading = false
      }
    })

    const setContractAddress = (contractAddress: string) => {
      self.contractAddress = contractAddress
      getTokenPricesMethod()
    }

    const setRange = (range: 'day' | 'week' | 'month' | 'year') => {
      self.range = range
      getTokenPricesMethod()
    }

    return {
      getTokenPricesMethod,
      setContractAddress,
      setRange,
    }
  })

export type IStatsStore = Instance<typeof StatsStore>
export type IPrice = Instance<typeof Price>
