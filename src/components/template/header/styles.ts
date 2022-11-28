import { Link } from 'react-router-dom'
import styled from 'styled-components'
import fluidTypography from 'tools/fluidTypography'

export const Container = styled.header`
    &{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px 0px;
        gap: 8px;
        background-color: papayawhip;
        margin-bottom: 1rem;
        width: 100%;
    }
`

export const Navigation = styled.nav`
    &{
        width: 100%;
        display: flex;
    }
`
export const LinksList = styled.ul`
    &{
        width: 100%;
        padding: 0px;
        margin: 0px;
        display: flex;
        justify-content: space-around;
        list-style-type: none;
    }
    &>li{
        padding: 0px;
        margin: 0px;
    }
`

export const LinkedNavText = styled(Link)`
    &{
        text-decoration: underline;
        font-size: ${fluidTypography(320, 1366, 14, 20)};
        font-weight: 600;
        transition: ease-in-out 0.1s;
        color: black;
    }
    &:visited {
       color: black; 
    }
    :hover{ 
        text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    }
`

export const Title = styled.h1`
    font-size: ${fluidTypography(320, 1366, 24, 34)};;
    margin: 0px;
    font-variant: small-caps;
`