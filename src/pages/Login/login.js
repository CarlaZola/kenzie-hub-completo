import styled from "styled-components";

const StyledLogin = styled.main`
    min-height: 100vh;
    background-color: var(--color-grey-400);
    padding-top: 2rem;
    padding-bottom: 2rem;

    section{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        align-items: center;

        h1{
            color: var(--color-primary);
            margin-bottom: 2.1875rem;
            letter-spacing: 2px;
        }

        .boxForm{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 95%;
            max-width: 23.125rem;
            background-color: var(--color-grey-300);
            padding: 0 1.125rem;
            border-radius: .25rem;
            min-height: 31.2rem;
       
        }
        .contentLogin{
                display: flex;
                justify-content: center;
            }

            h2{
                color: var(--color-grey-0);
                font-size: var(--font2);

            }


            .btnEnter{
                background-color: var(--color-primary);
            }

            span{
                font-size: var(--font3);
                text-align: center;
                margin: 2.125rem 0 1.375rem;
                color: var(--color-grey-100);
            }

    }

    @media(min-width: 900px){
        padding: 0;
    }


`

export default StyledLogin