import { Color, Font } from "@/types/ThemeType";
import styled from "styled-components";

export const MainTitle = styled.h1<{ font: Font, color?: Color }>`
  text-align: center;
  font-size: ${prop => prop.font.big};
`;

export const SemitTitle = styled.h2`
  text-align: center;
  padding: 1rem 0;
`