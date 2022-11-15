import React from "react";

import * as S from "./styles";

export const Text = ({ children, fontSize, as, color, width, margin }) => {
  return (
    <S.Text fontSize={fontSize} as={as} color={color} width={width} margin={margin}>
      {children}
    </S.Text>
  );
};
