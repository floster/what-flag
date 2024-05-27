export type Country = {
  name: string
  code: string
  flagData: FlagData
}

// possible colors of the flag
export enum Colors {
  black = 'black',
  white = 'white',
  red = 'red',
  green = 'green',
  blue = 'blue',
  yellow = 'yellow'
}

export enum FlagIcons {
  Symbol = 'symbol',
  Origami = 'origami',
  GbRelated = 'gb_related'
}

// colors that's used in the flag
export type FlagColors = {
  [key in keyof typeof Colors]?: boolean
}

export type FlagData = {
  symbol?: boolean | 'star'
  origami?: boolean
  gb_related?: boolean
  colors: FlagColors
}
