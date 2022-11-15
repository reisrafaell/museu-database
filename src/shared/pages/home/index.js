import React from "react";
import { Container, Input, Text } from "../../components";

import * as S from "./styles";

export const Home = () => {
  return (
    <Container>
      <S.Container>
        <S.Asside></S.Asside>
        <S.Content>
          <S.ContentTop>
            <Text as='p' fontSize='12px'>Imagem</Text>
            <Input type='image'/>
          </S.ContentTop>
          <S.ContentBot>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
            <Input type='text' label='Registro' width='14rem'></Input>
          </S.ContentBot>
        </S.Content>
      </S.Container>
    </Container>
  );
};
