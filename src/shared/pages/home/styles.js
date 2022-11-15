import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f6f9;
  display: flex;
  height: 100%;
`;

export const Asside = styled.aside`
  width: 17rem;
  height: auto;
  background: #2290ff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  div {
    flex: 1;
    display: flex;
    align-items: flex-end;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;
export const ContentTop = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  input{
    width: 30rem;
    border: 0;
  }
`;
export const ContentBot = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, auto));
  grid-gap: 10px;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Logo = styled.img`
  width: 12.8125rem;
`;
