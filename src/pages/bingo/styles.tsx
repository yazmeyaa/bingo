import styled from 'styled-components'

export const PageContainer = styled.main`
    max-width: 1400px;
    width: 80%;
    margin: 0px auto;
`

export const BingoField = styled.div`
    &{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2px;
    }
`

export const BingoItem = styled.div`
    &{
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 25px 15px;
        width: 30%;
        border: 2px solid black;
    }
`