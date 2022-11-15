import React, { useState } from "react";

import * as S from "./styles";
import { Container, Input, Text } from "../../components";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const background =
    "linear-gradient(296.59deg, rgba(0, 127, 255, 0.69) 4.49%, #4DC9FE 74.57%)";
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <Container background={background}>
      <S.Container>
        <Text
          as="h1"
          fontSize="3rem"
          color="#fff"
          width="18rem"
          margin="0 3rem 4rem"
        >
          Museu Uniacademia
        </Text>
        <S.Section>
          <S.Title>Login</S.Title>
          <S.Form onSubmit={handleSubmit}>
            <Input type="text" width="18rem" placeholder="Email" />
            <Input type="text" width="18rem" placeholder="Senha" />
            <S.Anchor>Esqueci minha senha</S.Anchor>
            <S.Button>Entar</S.Button>
          </S.Form>
        </S.Section>
      </S.Container>
    </Container>
  );
};
