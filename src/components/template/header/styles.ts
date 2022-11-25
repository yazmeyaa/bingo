import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
    &{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background-color: papayawhip;
        margin-bottom: 1rem;
    }
`

export const Navigation = styled.nav`
    &{
        width: 100%;
        margin: 0px auto;
        display: flex;
        justify-content: center;
    }
`
export const LinksList = styled.ul`
    &{
        width: 100%;
        padding: 0px;
        margin: 0px;
        display: flex;
        justify-content: space-evenly;
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
        font-size: 18px;
        font-weight: 600;
        transition: ease-in-out 0.1s;
    }
    &:visited {
       color: black; 
    }
    :hover{ 
        text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
    }
`

export const Title = styled.h1`
    font-size: 3rem;
    margin: 0px;
    font-variant: small-caps;
`