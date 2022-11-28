import styled from 'styled-components'

export const PageContainer = styled.main`
    display: flex;
    justify-content: center;
    max-width: 1400px;
    width: 100%;
    @media screen and (min-width: 620px) {
        width: 80%;
    }
`

export const BingoField = styled.div`
    &{
        width: fit-content;
        flex: 1 1 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(1fr);
        grid-column-gap: 6px;
        grid-row-gap: 6px;
        @media screen and (min-width: 620px) {
    }
    }
`

export const BingoItem = styled.div`
    &{
        flex: 1 0 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 1rem 5px;
        border: 2px solid black;
        transition: ease-out 0.5sec;
        aspect-ratio: 1;
    }
`