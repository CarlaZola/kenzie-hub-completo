import styled from "styled-components";

const StyledSelect = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    gap: .75rem;
    height: 6.5625rem;


    label{
        color: var(--color-grey-0);
        font-size: var(--font3);
    }

    select{
        background-color: var(--color-grey-200);
        border: 1px solid var(--color-grey-100);
        border-radius: .25rem;
        padding: .6563rem 1rem;
        display: flex;
        justify-content: space-between;
        color: var(--color-grey-0);
        width: 100%;
    }
    
    p{
        color: var(--color-primary-focus);
        font-size: var(--font3);
    }
`

export default StyledSelect