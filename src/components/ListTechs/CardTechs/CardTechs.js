import styled from "styled-components";

const StyledCardTechs = styled.li`
    width: 95%;
    background-color: var(--color-grey-300);
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    border-radius: .25rem;
    height: 3rem;
    padding: 0 1rem;
    cursor: pointer;

   :hover{
        background-color: var(--color-grey-200);
        border: 2px solid var(--color-grey-300);
   }

`
export default StyledCardTechs