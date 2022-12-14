import styled from "styled-components";

export const Container = styled.div`
  background-color: #f3f6f9;
  display: flex;
`;

export const Asside = styled.aside`
  width: 17rem;
  height: 100vh;
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

export const Logo = styled.img`
  width: 12.8125rem;
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
  height: 8rem;
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
`;

export const ContentMiddle = styled.div`
  width: 100%;
  height: 20rem;
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;
  h3 {
    width: 100%;
  }

  > div {
    display: flex;
    gap: 4rem;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentBot = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

export const Table = styled.table`
  border: 1px solid "#000";
  width: 100%;


  td {
    width: 15.2rem;
    height: 100%;
    padding-left: 0.2rem;
    display: flex;
    align-items: center;
    border: 1px solid #000;
    padding-left: 0.5rem;
  }
`;

export const ButtonTable = styled.button`
  border: 0;
  flex: 1;
  height: 100%;
  background-color: #727272;
  color: #fff;
  align-self: flex-end;
`;

export const TR = styled.tr`
  
    height: 2.5rem;
    border: 1px solid "#000";

    background-color: #dedddd;
    background-color: ${(props) => (props.bg ? "#dedddd" : "#F5F5F5")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
  
`;
