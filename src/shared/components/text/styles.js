import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "1rem"};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  text-align: center;
`;
