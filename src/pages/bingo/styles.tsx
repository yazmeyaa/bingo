import styled from 'styled-components'

export const PageContainer = styled.main`
    display: flex;
    justify-content: center;
    max-width: 1400px;
    width: 100%;
    margin: 0px auto;
    @media screen and (min-width: 620px) {
        width: 80%;
    }
`

export const BingoField = styled.div`
    &{
        width: fit-content;
        padding: 0px 6px;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 2px;
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
    }
`