import styled from 'styled-components'
import fluidTypography from 'tools/fluidTypography'

export const Container = styled.main`
    &{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1400px;
        width: 100%;
        margin: 0px auto;
        padding: 0px 12px;
        gap: 48px;
    }
`

export const NewCardForm = styled.form`
    &{
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 6px 12px;
    }
`

export const Input = styled.input`
    &{
        flex: 0 0 auto;
    }
`


export const AddNewCardButton = styled.button`
    &{
    }
`

export const CreatedCardsContainer = styled.div`
    &{
        width: fit-content;
        flex: 1 1 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1fr);
        grid-column-gap: 12px;
        grid-row-gap: 12px;
    }
`

export const CardContainer = styled.form`
    &{
        flex: 1 0 33%;
        font-size: ${fluidTypography(320, 1920, 18, 24)};
        display: flex;
        border-radius: 8px;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        border: 2px solid black;
        transition: ease-out 0.5sec;
        aspect-ratio: 1;
        background-color: #ffedd7;
        max-width: 500px;
        word-wrap: break-word;
        word-break: keep-all;
        box-shadow: 6px 6px 12px 6px rgba(0, 0, 0, 0.1);
        transition: ease-in 0.2;
        gap: 24px;

        @keyframes create {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        animation-name: create;
        animation-duration: 0.4s;
        animation-fill-mode: both;

    }
    &>span{
        word-wrap: break-word;
    }
`

export const ButtonsContainer = styled.div`
    &{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        word-break: keep-all;
        @media only screen and (min-width: 1000px) {
            flex-direction: row;
        }
    }
`

export const EditInput = styled.input`
    &{
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.2);

    }
`

export const CardButton = styled.button`
    &{
        padding: 8px;
        width: 50%;
        background-color: transparent;
        border: 1px solid red;
    }
    &:hover{

    }
`

