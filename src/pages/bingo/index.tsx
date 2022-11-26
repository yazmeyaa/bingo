import { useState } from "react"
import { Location, useLocation } from "react-router-dom"
import { BingoField, BingoItem, PageContainer } from "./styles"

interface LocationWithState extends Location {
    state: {
        bingoTemplate: string[]
    }
}

function Bingo() {
    const location = useLocation() as LocationWithState
    const [bingoValues, setBingoValues] = useState<string[]>(location.state.bingoTemplate)
    return (
        <PageContainer>
            <BingoTemplate values={bingoValues} />
        </PageContainer>
    )
}

interface BingoFieldProps {
    values: string[]
}

function BingoTemplate(props: BingoFieldProps) {
    const Field = props.values.map((item, index) => <BingoItem key={index}>{item}</BingoItem>)
    return (
        <BingoField >
            {Field}
        </BingoField>
    )
}

export default Bingo