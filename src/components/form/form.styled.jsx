import styled from "styled-components";
import * as theme from "../../theme";
import Select from "react-select";

export const FormInput = styled.input`
  display: block;
  width: 90%;
  height: 30px;
  border: 2px solid ${theme.COLORS.gray};
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 12px 20px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${theme.COLORS.black};
  font-size: ${theme.FONTS.SIZES.s};
`;
export const FormSelect = styled(Select)`
  width: 90%;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${theme.COLORS.black};
  font-size: ${theme.FONTS.SIZES.s};
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: ${theme.COLORS.darckGray};
`;

export const FormStyled = styled.form`
  padding: 15px;
  font-family: ${theme.FONTS.WEIGHTS.normal};
  width: 100%;
  max-width: 600px;
  border: solid 2px ${theme.COLORS.darckGray};
  border-radius: 12px;
`;
export const Title = styled.h3`
  font-family: ${theme.FONTS.WEIGHTS.bold};
  font-size: ${theme.FONTS.SIZES.m};
  text-align: center;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: ${theme.COLORS.darckGray};
  text-align: center;
`;
export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
