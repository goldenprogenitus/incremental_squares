import styled, { css } from "styled-components";

export const StyledBlock = styled.div`
  height: 40px;
  width: 40px;
  background-color: white;
  margin: 4px;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}

  ${({ fadeOut }) =>
    fadeOut &&
    css`
      transition: opacity 250ms ease-out;
      opacity: 0;
    `}

  ${({ fadeOut }) =>
    !fadeOut &&
    css`
      transition: opacity 250ms ease-in;
      opacity: 1;
    `}
`;
