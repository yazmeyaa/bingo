import { ReactNode } from "react"
import Header from "./header"
import { Container } from "./styles"

interface TemplateType {
    children: ReactNode
}

function Template({ children }: TemplateType) {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    )
}

export default Template