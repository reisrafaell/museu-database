import styled from "styled-components";

export const Container = styled.div`
flex: 1;
background: ${props=> props.background || '#fff'};
height: 100vh;
`;

export const Content = styled.div`
flex: 1;
height: 100vh;
max-width: 1400px;
margin: 0 auto;
`;
