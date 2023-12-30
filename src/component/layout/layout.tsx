import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Box, FloatingBox } from "../common/Box";
import { Header } from "../common/Header";
import { navSet } from "@/constants/Nav";
import Link from "next/link";
import { Color, Font } from "@/types/ThemeType";
import { useTheme } from "@/theme/useTheme";
import { MainTitle } from "../common/Title";

const CustomLink = styled(Link) <{ font: Font, color: Color }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
  font-size: ${prop => prop.font.middle};
`;

type LayoutProp = {
  children: ReactNode
}

export const Layout: FC<LayoutProp> = ({ children }) => {
  const theme = useTheme();

  return (
    <FloatingBox>
      <Header color={theme.color[theme.theme]}>
        <Link style={{ borderRight: `.1rem solid ${theme.color[theme.theme].light}`, width: "50rem", display: "flex", justifyContent: "center" }} href="/">
          <MainTitle font={theme.font[theme.fSize]}>종합교육행정시스템</MainTitle>
        </Link>
        <Box style={{ width: "100rem", display: "flex" }}>
          {Object.keys(navSet).map(nav => {
            return (
              <Box key={nav}>
                <CustomLink href={navSet[nav].path} font={theme.font.Four} color={theme.color[theme.theme]}>
                  {navSet[nav].name}
                </CustomLink>
              </Box>
            )
          })}
        </Box>
      </Header>
      {children}
    </FloatingBox>
  )
}