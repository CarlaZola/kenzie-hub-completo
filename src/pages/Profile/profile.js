import styled from "styled-components";

const Home = styled.div`
    background-color: var(--color-grey-400);
    min-height: 100vh;
    width: 100%;
    color: var(--color-grey-0);

    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 1rem;
        border-bottom: 1px solid var(--color-grey-300);
        margin-bottom: 1.5rem;


        h1{
            color: var(--color-primary);
            font-size: 1.5rem;
        }

        button{
            padding: .0625rem 1rem;
            border-radius: .25rem;
            border: none;
            cursor: pointer;
            background-color: var(--color-grey-200);
            color: var(--color-grey-0);

        }    
    }
    main{
        width: 95%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap : 2rem;

        section {
            display: flex;
            flex-direction: column;

        }
    }

    @media(min-width: 900px){
        header{
            justify-content: space-between;
            padding: 1rem 8.5rem;
        }

        main{
            align-items: center;
            section{
            width: 80%;
            flex-direction: row;
            justify-content: space-between;
            }
        }

       
    }

`

export default Home
