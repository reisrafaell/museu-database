import React from "react";
import { Container, Input, Text, Button } from "../../components";

import Logo from "../../assets/museu1.png";

import * as S from "./styles";

import { useNavigate } from "react-router-dom";

const TableItens = () => {
  const intens = [
    {
      id: 1,
      codigoPeca: "0909877",
      nome: "Jabuti",
      colhecao: "vertebrados",
      familia: "testudinidae",
    },
    {
      id: 2,
      codigoPeca: "0909877",
      nome: "Jabuti",
      colhecao: "vertebrados",
      familia: "testudinidae",
    },
    {
      id: 4,
      codigoPeca: "0909877",
      nome: "Jabuti",
      colhecao: "vertebrados",
      familia: "testudinidae",
    },
    {
      id: 4,
      codigoPeca: "0909877",
      nome: "Jabuti",
      colhecao: "vertebrados",
      familia: "testudinidae",
    },
  ];

  return intens.map((iten, index) => {
    return (
      <S.TR bg={ index % 2 == 0 ? true: false}>
        <td>{iten.codigoPeca}</td>
        <td>{iten.nome}</td>
        <td>{iten.colhecao}</td>
        <td>{iten.familia}</td>
        <S.ButtonTable>Editar</S.ButtonTable>
      </S.TR>
    );
  });
};

export const Inventario = () => {
  const navigate = useNavigate();

  const HandleNavigat = () => {
    navigate("/home");
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
            onClick={HandleNavigat}
          />
          <Button
            width="15rem"
            height="3rem"
            color="#000"
            label="Inventário"
            margin="1rem"
          />
          <div>
            <Button
              width="12.5rem"
              height="3rem"
              color="#000"
              label="Sair"
              margin="1rem"
              onClick={true}
            />
          </div>
        </S.Asside>
        <S.Content>
          <S.ContentTop>
            <Text as="h3" fontSize="40px">
              Inventário
            </Text>
          </S.ContentTop>

          <S.ContentMiddle>
            <Text as="h3" fontSize="30px">
              Filtrar
            </Text>
            <div className="Middle">
              <Input type="text" label="Coleção" width="14rem"></Input>
              <Input type="text" label="Data Cadastrada" width="14rem"></Input>
              <Input type="text" label="Período" width="14rem"></Input>
              <form>
                <Text as="p" fontSize="16px">
                  Em exposição?
                </Text>
                <label>
                  <input type="radio" value="Sim" />
                  Sim
                </label>
                <label>
                  <input type="radio" value="Não" />
                  Não
                </label>
              </form>
            </div>
            <Button
              width="15rem"
              height="3rem"
              color="#000"
              label="Filtrar"
              margin="1rem"
            />
          </S.ContentMiddle>

          <S.ContentBot>
            <Text as="h3" fontSize="30px" margin="1rem 0">
              Resultado
            </Text>
            <S.Table>
              <TableItens />
            </S.Table>

            <div></div>
          </S.ContentBot>
        </S.Content>
      </S.Container>
    </Container>
  );
};
