import { useRef, useState, FormEvent, FunctionComponent } from "react"



interface CardType {
    readonly id: number
    text: string
}



function CreateNewBingo() {
    const [bingos, setBingos] = useState<CardType[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    function addCard(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!inputRef.current) return
        const currentId = bingos.length
        const newCard: CardType = {
            id: currentId,
            text: inputRef.current.value
        }
        setBingos([...bingos, newCard])
        inputRef.current.value = ''
    }

    function removeCard(id: number) {
        setBingos(prev => {
            const newArray = prev.filter(item => item.id !== id)
            return newArray
        })
    }

    return (
        <div>
            <form onSubmit={addCard}>
                <input ref={inputRef} />
                <button type='submit'> Добавить новое поле</button>
            </form>
            <div>
                {bingos.map((item) => <SingleBingoCard key={item.id} id={item.id} text={item.text} removeCard={removeCard} />)}
            </div>
        </div>
    )
}

interface BingoCardProps {
    id: number
    text: string
    removeCard: (id: number) => void
}

const SingleBingoCard: FunctionComponent<BingoCardProps> = ({ text, removeCard, id }) => {
    return (
        <div>
            <span>{text}</span>
            <button onClick={() => {
                removeCard(id)
            }}>Удалить</button>
        </div>
    )
}

export default CreateNewBingo