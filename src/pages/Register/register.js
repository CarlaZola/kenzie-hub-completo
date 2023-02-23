import styled from "styled-components";


const StyledRegister = styled.main`
    background-color: var(--color-grey-400);
    width: 100%;
    overflow-x: hidden;


    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0rem auto;
        padding: 2rem 0;
        align-items: center;

        .navBar{
            display: flex;
            justify-content: space-between;
            width: 95%;
            max-width: 23.125rem;
            padding: 0 .5rem;
            margin-bottom: 3rem;

            .linkRegister{
                height: unset;
            }
        }
        h1{
            color: var(--color-primary);
        }

        .contentForm{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 95%;
            max-width: 23.125rem;
            background-color: var(--color-grey-300);
            padding: 0 1.125rem;
            border-radius: .25rem;
            min-height: 31.25rem;
            padding: 2.375rem 1.125rem 1.125rem;

            h2, span{
                text-align: center;
            }

            h2{
                color: var(--color-grey-0);
                margin-bottom: .5rem;
                font-size: var(--font2);
            }

            span{
                color: var(--color-grey-100);
                font-size: var(--font3);
            }
        }
    }
`

export default StyledRegister