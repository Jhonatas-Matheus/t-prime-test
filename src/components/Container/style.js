import styled from "styled-components";

export const StyledContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: calc(100vh - 5rem);
background: linear-gradient(180deg, #7A97FF 52.6%, #000000 100%);
overflow-y: auto;
overflow-x: none;
@media (min-width: 768px){
    height: 100vh;
}
`