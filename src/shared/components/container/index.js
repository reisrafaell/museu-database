import React from "react";

import * as S from "./styles";

export const Container = ({ children, background }) => {
  return (
    <S.Container background={background}>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
