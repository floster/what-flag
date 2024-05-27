export type Country = {
  name: string
  code: string
}

interface FlagColors {
  black: boolean
  white: boolean
  red: boolean
  green: boolean
  blue: boolean
  yellow: boolean
}

export type FlagData = {
  symbol: boolean
  colors: FlagColors
}
