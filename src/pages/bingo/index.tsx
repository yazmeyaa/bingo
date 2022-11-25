import { useEffect, useState } from "react"
import { BingoField, BingoItem, PageContainer } from "./styles"
// import axios from 'axios'

// async function fetchBingoValues(bingo_id: number) {
//     const url = process.env.REACT_APP_BACKEND_URL as string + bingo_id
//     const response = await axios<string[]>({
//         url,
//         method: 'POST',
//         params: {
//             bingo_id
//         }
//     })
//     return response
// }

function Bingo() {
    const [bingoValues, setBingoValues] = useState<string[]>([])
    useEffect(() => {
        // fetchBingoValues(1)
        //     .then(data => {
        //         if (data.status === 200) setBingoValues(data.data)
        //     })
        setBingoValues(['Дурак', 'Ненавидит работать', 'хочу пива', 'Танцы', 'Пляски', 'Пятница', 'asd', 'dsa', 'dqweqw'])
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
    const Field = props.values.map(item => <BingoItem>{item}</BingoItem>)
    return (
        <BingoField >
            {Field}
        </BingoField>
    )
}

export default Bingo