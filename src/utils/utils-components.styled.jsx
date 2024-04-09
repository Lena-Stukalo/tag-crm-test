import styled from "styled-components";
import * as theme from "../theme";

export const PrimryButton = styled.button`
  display: ${({ isPrimary }) => (isPrimary ? "block" : "none")};
  width: 100px;
  height: 30px;
  left: 20px;
  color: ${theme.COLORS.white};
  border: 1px solid ${theme.COLORS.blue};
  border-radius: 5px;
  background-color: ${theme.COLORS.blue};
  font-size: ${theme.FONTS.SIZES.s};
  text-align: center;
  margin: 0 auto;

  &:hover {
    background: ${theme.COLORS.white};
    color: ${theme.COLORS.blue};
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const SecondaryButton = styled.button`
  display: ${({ isSecondary }) => (isSecondary ? "block" : "none")};
  width: 100px;
  height: 30px;
  left: 20px;
  color: ${theme.COLORS.blue};
  border: 2px solid ${theme.COLORS.blue};
  border-radius: 5px;
  background-color: ${theme.COLORS.white};
  font-size: ${theme.FONTS.SIZES.s};
  text-align: center;
  margin: 0 auto;

  &:hover {
    background: ${theme.COLORS.blue};
    color: ${theme.COLORS.white};
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
