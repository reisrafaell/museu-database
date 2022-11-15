import styled from "styled-components";

export const Container = styled.div`
flex: 1;
height: 100vh;
background: ${props=> props.background || '#fff'};

`;

export const Content = styled.div`
flex: 1;
max-width: 1400px;
height: 100%;
margin: 0 auto;

`;
