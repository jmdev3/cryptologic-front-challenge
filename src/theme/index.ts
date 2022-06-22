import dark from './dark'
import light from './light'
import {
  FontSizes,
  IFontSizes,
  IMediaQueries,
  IThemes,
  MeasuresValues,
} from './types'

const fontSizes: IFontSizes = {
  xs: `${FontSizes.XS}px`,
  sm: `${FontSizes.SM}px`,
  md: `${FontSizes.MD}px`,
  lg: `${FontSizes.LG}px`,
  xl: `${FontSizes.XL}px`,
}

const mediaQueries: IMediaQueries = {
  xs: `@media (min-width: ${MeasuresValues.XS}px)`,
  sm: `@media (min-width: ${MeasuresValues.SM}px)`,
  md: `@media (min-width: ${MeasuresValues.MD}px)`,
  lg: `@media (min-width: ${MeasuresValues.LG}px)`,
  xl: `@media (min-width: ${MeasuresValues.XL}px)`,
}

const base = {
  fontSizes,
  mediaQueries,
}

const themes: IThemes = {
  dark: {
    ...dark,
    ...base,
  },
  light: {
    ...light,
    ...base,
  },
}

export default themes
