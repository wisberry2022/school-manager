import styled from "styled-components";

export const Figure = styled.figure<{ url: string, width?: string, height?: string }>`
  background-image: url(${prop => prop.url});
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin: 0 auto;
  width: ${prop => prop.width ?? "15rem"};
  height: ${prop => prop.height ?? "5rem"};
`