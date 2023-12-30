import styled from "styled-components";

export const FloatingBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150rem;
  height: 70%;
`;

export const Box = styled.div<{ width?: string }>`
  width: ${prop => prop.width ?? "50%"};
`;

export const FlexBox = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  width: ${prop => prop.width ? prop.width : "100%"};
`;

export const ColumnFlexBox = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${prop => prop.width ? prop.width : "100%"};
`;