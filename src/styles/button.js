import styled from "styled-components";

const Button = styled.button`
    height: 3rem;
    border-radius: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-grey-0);
    border: none;
    cursor: pointer;
    font-size: var(--font1);
    background-color: var(--color-primary);

    .loading{
        animation: spinner 1s infinite linear;
    }


    @keyframes spinner{
        0%{
            transform: rotate(0);
        }
        100%{
            transform: rotate(360deg);
        }
    }

`

export default Button