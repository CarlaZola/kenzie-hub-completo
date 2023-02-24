import styled from "styled-components";

const Home = styled.div`
    background-color: var(--color-grey-400);
    min-height: 100vh;
    width: 100%;
    color: var(--color-grey-0);
	 
    header{
        width: 100%;
        border-bottom: 1px solid var(--color-grey-300);
        margin-bottom: 1.5rem;
        padding: 1rem;

        .boxHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 95%;
            max-width: 50rem;
            margin: 0 auto;

        }

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

        .contentProfileInfo, .contentTechs{
            display: flex;
            flex-direction: column;
            width: 95%;
            max-width: 50rem;
            margin: 0 auto;

        }

        .contentProfileInfo{
            padding: .25rem;
        }

        .boxCreateTech{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding: 0 .25rem;

            h2{
                font-size: var(--font1);
            }
            p{
                background-color: var(--color-grey-300);
                padding: .5rem .75rem ;
                border-radius: .25rem;
                cursor: pointer;
            }
        }
        
    }

    @media(min-width: 900px){
       
        main{
            .contentProfileInfo{
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }        
        }      
    }

`

export default Home
