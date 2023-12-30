import { createContext, useContext } from "react";
import { ColorPalette, FontKey, FontSet, Palette, ThemeKey, ThemeType } from "../types/ThemeType";

export const CustomThemeContext = createContext<ThemeType>({
  color: {} as ColorPalette,
  font: {} as FontSet,
  theme: "gray" as Palette,
  fSize: "Four" as FontKey,
});

export const useTheme = (): ThemeType => {
  const themeSet = useContext(CustomThemeContext);
  return themeSet;
}

