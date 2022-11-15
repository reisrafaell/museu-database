import React from "react";

import * as S from "./styles";

export const Button  = ({ label, fontSize, as, color, width, margin,height,onClick,opacity }) => {
  return (
    <S.Button fontSize={fontSize} height={height}  as={as} color={color} width={width} margin={margin} onClick={onClick} opacity={opacity}>
      {label}
    </S.Button>
  );
};
