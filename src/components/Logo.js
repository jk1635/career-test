import React from "react";
import styled from "styled-components";

// components & elements
import theme from "../shared/theme";
import { head_1 } from "../shared/textStyle";

const Logo = () => {
  return (
    <LogoWrap>
      <eliceLogo>{eliceLogo}</eliceLogo>
    </LogoWrap>
  );
};

const eliceLogo = "/* elice */";

const LogoWrap = styled.h1`
  ${head_1}
  color: ${props => theme.colors.main};
  text-align: center;
`;

export default Logo;
