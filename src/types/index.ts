export type Country = {
  name: string
  code: string
  flagData: FlagData
}

export interface FlagColors {
  black: boolean
  white: boolean
  red: boolean
  green: boolean
  blue: boolean
  yellow: boolean
}

export type FlagData = {
  symbol?: boolean | 'star'
  origami?: boolean
  gb_related?: boolean
  colors: FlagColors
}
