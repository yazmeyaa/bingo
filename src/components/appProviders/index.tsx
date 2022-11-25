import { ReactNode } from "react"
import { BrowserRouter } from 'react-router-dom'
import { Global } from "../globalStyles"

interface ProvidersType {
    children: ReactNode
}

function AppProviders({ children }: ProvidersType) {
    return (
        <BrowserRouter>
            <Global />
            {children}
        </BrowserRouter>
    )
}

export default AppProviders