import React from "react";

import * as S from "./styles";

export const Input = ({ children, label, onChange, type, width, margin,placeholder }) => {
  return (
    <S.Container  margin={margin} width={width}>
      {label &&
      <S.Label htmlfor={type}>
        {label}
      </S.Label>
      }
      {children}
      <S.Input id={type} onChange={onChange} type={type} placeholder={placeholder}/>
    </S.Container>
  );
};
