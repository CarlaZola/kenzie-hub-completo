import styled from "styled-components";

const StyledFieldsetPassword = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    gap: .75rem;
    height: 6.5625rem;


    label{
        color: var(--color-grey-0);
        font-size: var(--font3);
    }    

    .contentInput{
        height: 3rem;
        background-color: var(--color-grey-200);
        border: 0.5px solid var(--color-grey-0);
        border-radius: .25rem;
        display: flex;
        justify-content: space-between;
        padding: 0 .75rem;
        align-items: center;

        input{
            background-color: transparent;
            border: none;
            outline: none;
            color: var(--color-grey-0);
        }   
       

        button{
            background-color: transparent;
            border: none;
            cursor: pointer;
            width: 1rem;
            height: 1rem;
        }
    }


    p{
        color: var(--color-primary-focus);
        font-size: var(--font3);
    }

  
`

export default StyledFieldsetPassword