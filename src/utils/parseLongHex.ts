const parseLongHex = (hex: string): string =>
  `${hex.slice(0, 6)}...${hex.slice(hex.length - 4)}`

export default parseLongHex
