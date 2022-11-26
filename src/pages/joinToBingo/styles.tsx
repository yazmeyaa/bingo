import styled from 'styled-components'

export const Container = styled.div`
    &{
        width: 100%;
    }
`

export const Form = styled.form`
    &{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }

    &>strong {
        color: red;
    }

    &> button {
        padding: 4px 8px;
        font-weight: 600;
    }
`

export const Description = styled.dl`
    padding: 0px 12px;
`

export const Input = styled.label`
    &{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &>input {
        padding: 4px 8px;
        outline: none;
    }
`