import { Color } from "@/types/ThemeType";
import styled from "styled-components";

export const Header = styled.header<{ color: Color }>`
  border-left: ${prop => `.1rem solid ${prop.color.light}`};
  border-top: ${prop => `.1rem solid ${prop.color.light}`};
  border-right: ${prop => `.1rem solid ${prop.color.light}`};
  border-bottom: ${prop => `.1rem solid ${prop.color.light}`};
  display: flex;
`