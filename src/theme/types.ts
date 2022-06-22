export interface IColors {
  primary: string;
  secondary: string;

  backgroundPrimary: string;
  backgroundSecondary: string;

  buttonPrimary: string;
  buttonDefault: string;

  white: string;
  black: string;
  dark: string;
  light: string;
  grey: string;
  blue: string;
  violet: string;
  red: string;
  green: string;

  boxShadow: string;
}

export interface IFontSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export enum FontSizes {
  XS = 12,
  SM = 14,
  MD = 16,
  LG = 24,
  XL = 32,
}

export enum MeasuresValues {
  XS = 576,
  SM = 768,
  MD = 992,
  LG = 1200,
  XL = 1600,
}

export interface IMediaQueries {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface ITheme {
  colors: IColors;
  fontSizes: IFontSizes;
  mediaQueries: IMediaQueries;
}

export interface IThemes {
  dark: ITheme;
  light: ITheme;
}
