import styled from 'styled-components'

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
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }
`

export const CardContainer = styled.form`
    &{
        box-sizing: border-box;
        flex: 1 0 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 1rem 5px;
        border: 2px solid black;
        transition: ease-out 0.5sec;
        flex-direction: column;
        gap: 12px;
    }
    &>span{
        word-wrap: break-word;
    }
`

export const ButtonsContainer = styled.div`
    &{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 24px;
    }
`

export const CardButton = styled.button`
    &{

    }
`

