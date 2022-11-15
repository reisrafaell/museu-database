import React from "react";
import { Container, Input, Text } from "../../components";
import Logo from '../../assets/museu1.png'
import * as S from "./styles";

export const Home = () => {
  return (
    <Container>
      <S.Container>
        <S.Asside>
<S.Logo src={Logo} alt='logo museu'/>
<Text as='h1' fontSize='2rem' color='#fff'>Museu Uniacademua</Text>

        </S.Asside>
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
