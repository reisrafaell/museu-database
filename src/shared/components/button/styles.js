import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "1rem"};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: center;
`;
