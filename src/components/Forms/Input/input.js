import styled from "styled-components";

const StyledFieldset = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    gap: .75rem;
    height: 6.5625rem;

    label{
        color: var(--color-grey-0);
        font-size: var(--font3);
    }

    input{
        height: 3rem;
        border: 0.5px solid var(--color-grey-0);
        border-radius: .25rem;
        color: var(--color-grey-0);
        padding: 0 .75rem;
        background-color: var(--color-grey-200);
    }

    input:focus{
        outline: 0.5px solid var(--color-grey-0);
    }

    p{
        color: var(--color-primary-focus);
        font-size: var(--font3);
    }

`

export default StyledFieldset