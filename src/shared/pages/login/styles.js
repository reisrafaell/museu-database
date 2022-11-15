import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  width: 35.25rem;
  height: 31.25rem;
  border-radius: 117px 0px 118px 0px;
  -moz-border-radius: 117px 0px 118px 0px;
  -webkit-border-radius: 117px 0px 118px 0px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(0.23deg);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;
  text-align: center;

  background: linear-gradient(264.92deg, #0070e1 45.92%, #4dc9fe 68.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 11rem;
`;
export const Button = styled.button`
  border: 0;
  background-color: transparent;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
  color: #4dc9fe;
  &:hover {
    color: #0070e1;
  }
`;
export const Anchor = styled.a`
  border: 0;
  background-color: transparent;
  font-size: 0.8rem;
  line-height: 2.5rem;
  text-align: center;
  color: #4dc9fe;
  position: absolute;
  bottom: 9.5rem;
  &:hover {
    color: #0070e1;
  }
`;
