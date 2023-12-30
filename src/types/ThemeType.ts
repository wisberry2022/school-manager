export type FontKey = "Four" | "Five" | "Six";
export type Palette = "black" | "white" | "gray" | "yellow" | "blue" | "red";
export type ThemeFlag = FontKey & Palette;

export type ThemeKey = "color" | "font";

export type Color = {
  main: string;
  sub: string;
  light: string;
  error: string;
}

export type Font = {
  title: string;
  subtitle: string;
  large: string;
  big: string;
  middle: string;
  semi: string;
  small: string;
  tiny: string;
}

export type FontSet = {
  Four: Font;
  Five: Font;
  Six: Font;
}

export type ColorPalette = {
  [key: string]: Color
}

export type ThemeType = {
  color: ColorPalette,
  font: FontSet
  theme: string;
  fSize: FontKey;
}