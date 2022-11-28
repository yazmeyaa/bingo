import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body {
        display: flex;
        flex-direction: column;
        min-width: 100vw;
    }
`