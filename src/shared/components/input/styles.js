import styled from "styled-components";

export const Container = styled.fieldset`
  border: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;
export const Label = styled.label``;

export const Input = styled.input`
padding: 0.5rem;
border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    text-align: start;
    color: #c6c3c3;
  }
`;
