import { defineStore } from 'pinia'
import type { Country } from '@/types'
import { Colors } from '@/types'
import { countries } from '@/constants'

export const useCountriesStore = defineStore({
  id: 'coutries',
  state: () => ({
    countries,
    filters: {
      colors: [] as (keyof typeof Colors)[]
    },
    extendedFlagInfo: false,
    flagsWithSymbolOnly: false
  }),
  getters: {
    getCountriesCodes: (state) => state.countries.map((country) => country.code.toLowerCase()),
    getCountryByCode:
      (state) =>
      (code: string): Country | undefined =>
        state.countries.find((country) => country.code === code),

    getFlagsWithSymbol: (state): Country[] =>
      state.countries.filter((country) => country.flagData.symbol),

    getFilteredFlags(state): string[] {
      const flags = this.flagsWithSymbolOnly ? this.getFlagsWithSymbol : state.countries

      return flags
        .filter((country) => state.filters.colors.every((color) => country.flagData.colors[color]))
        .map((country) => country.code)
    },

    getResultsQty(): number {
      return this.getFilteredFlags.length
    }
  },
  actions: {
    addFilteredColor(color: keyof typeof Colors) {
      this.filters.colors.push(color)
    },
    toggleExtendedFlagInfo() {
      this.extendedFlagInfo = !this.extendedFlagInfo
    },
    toggleFlagsWithSymbolOnly() {
      this.flagsWithSymbolOnly = !this.flagsWithSymbolOnly
    }
  }
})
