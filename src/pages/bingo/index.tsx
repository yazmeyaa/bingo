import { useEffect, useState } from "react"
import { Location, useLocation, useNavigate } from "react-router-dom"
import getBingo from "tools/getBingo"
import { BingoField, BingoItem, PageContainer } from "./styles"

interface LocationWithState extends Location {
    state: {
        bingoTemplate: string[]
    }
}


function Bingo() {
    const [bingoValues, setBingoValues] = useState<string[]>([])
    const location = useLocation() as LocationWithState
    const navigator = useNavigate()

    useEffect(() => {
        if (location.state === null) {
            const id = location.pathname.split('/')
            getBingo(parseInt(id[id.length - 1]))
                .then(data => {
                    setBingoValues(data.values)
                })
                .catch(() => {
                    navigator('/join')
                })
            return;
        }
        if(location.state)
            setBingoValues(location.state.bingoTemplate)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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