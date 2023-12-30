import { FC, ReactNode } from "react";
import { Fonts } from "./Fonts";
import { palette } from "./Colors";
import { CustomThemeContext } from "./useTheme";

type ProviderProps = {
  children: ReactNode
}

export const CustomTheme: FC<ProviderProps> = ({ children }) => {
  return (
    <CustomThemeContext.Provider value={{ font: Fonts, color: palette, theme: "gray", fSize: "Four" }} >
      {children}
    </CustomThemeContext.Provider>
  )
} 