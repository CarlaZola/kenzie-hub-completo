import styled from "styled-components";

const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 5rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-start;


    .dialog_div{
        width: 95%;
        max-width: 23.125rem;
        margin: 0 auto;
        background-color: var(--color-grey-300);
        border-radius: .25rem;


        .modalHeader{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.25rem 1rem;
            background-color: var(--color-grey-200);
            height: 3.125rem;
            border-radius: .25rem .25rem 0 0;

            .btnCloseModal{
                font-weight: bold;
                cursor: pointer;
            }

            h2{
                font-size: .875rem;
            }

            p {
                cursor: pointer;
            }
        }
    }
`


const StyledModalDelete = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 2rem;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 10rem;


    .dialog_div{
        width: 90%;
        max-width: 22.1875rem;
        margin: 0 auto;
        background-color: var(--color-grey-300);
        border-radius: .25rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;

        .modalHeader{
            display: flex;
            justify-content: space-between;

            p{
                font-size: .875rem;
                text-align: center;
            }

            .btnCloseModal{
                font-weight: bold;
                cursor: pointer;
            }
        }

        .boxButton{
            display: flex;
            justify-content: space-around;

            .btnCancel, .btnConfirm {
                padding : 0 2rem;

            }

            .btnCancel{
                background-color: var(--color-grey-100);
            }

        }
    }
    


`

export  {Modal, StyledModalDelete} 