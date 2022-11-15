import React from "react";
import { Button, Container, Input, Text } from "../../components";
import Logo from "../../assets/museu1.png";
import InputImage from "../../assets/input.png"
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();

  const HandleNavigat = () => {
    navigate("/inventário");
  };
  return (
    <Container>
      <S.Container>
        <S.Asside>
          <S.Logo src={Logo} alt="logo museu" />
          <Text as="h1" fontSize="2rem" color="#fff">
            Museu Uniacademua
          </Text>
          <Button
            width="15rem"
            height="3rem"
            color="#000"
            label="Cadastro de Peças"
            margin="1rem"
            opacity={true}
          />
          <Button
            width="15rem"
            height="3rem"
            color="#000"
            label="Inventário"
            margin="1rem"
            onClick={HandleNavigat}
          />
          <div>
            <Button
              width="12.5rem"
              height="3rem"
              color="#000"
              label="Sair"
              margin="1rem"
              onClick={HandleNavigat}
            />
          </div>
        </S.Asside>
        <S.Content>
          <S.ContentTop>
            <Text as="p" fontSize="12px">
              Imagem
            </Text>
            <Input type="image" src={InputImage} style="float:right" />
          </S.ContentTop>
          <S.ContentBot>
            <Input type="text" label="Registro" width="14rem"></Input>
            <Input type="text" label="Categoria" width="14rem"></Input>
            <Input type="text" label="Código" width="14rem"></Input>
            <Input type="date" label="Data Cadastrada" width="14rem"></Input>
            <Input type="text" label="Acervo" width="14rem"></Input>
            <Input type="text" label="Coleção" width="14rem"></Input>
            <Input type="text" label="Localidade" width="14rem"></Input>
            <Input type="text" label="Classe" width="14rem"></Input>
            <Input
              type="date"
              label="Data de Recatalogaçao"
              width="14rem"
            ></Input>
            <Input type="text" label="Ordem" width="14rem"></Input>
            <Input type="date" label="Data de Entrada" width="14rem"></Input>
            <Input type="text" label="Familia" width="14rem"></Input>
            <Input type="date" label="Data de taxidermia" width="14rem"></Input>
            <Input type="text" label="Nome Cientifico" width="14rem"></Input>
            <Input type="date" label="Data de taxidermia" width="14rem"></Input>
            <Input type="text" label="Nome Popular" width="14rem"></Input>
            <Input type="text" label="Procedência" width="14rem"></Input>
            <Input
              type="text"
              label="Estado de Conservação"
              width="14rem"
            ></Input>
            <Input type="text" label="Autor" width="14rem"></Input>
            <Input type="text" label="Observações" width="14rem"></Input>
            <Input type="text" label="Exposição" width="14rem"></Input>
            <Input type="text" label="Descrição" width="14rem"></Input>
          </S.ContentBot>
        </S.Content>
      </S.Container>
    </Container>
  );
};
