import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "1rem"};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 0;
  text-align: center;
  border-radius: 10px;
  opacity: ${(props) => props.opacity ? 0.4 : null};
`;
