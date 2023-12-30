import { Color } from "@/types/ThemeType";
import styled from "styled-components";

export const Button = styled.button<{ bg: Color }>`
  margin: 0 auto;
  border-radius: 2rem;
  padding: .5rem 2rem;
  width: 80%;
  color: #fff;
  background-color: ${prop => prop.bg.sub};
`