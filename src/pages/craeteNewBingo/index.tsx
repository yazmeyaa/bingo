import axios from "axios"
import { useRef, useState, FormEvent, FunctionComponent, createContext, useEffect, useContext, memo } from "react"


interface ContextType {
    editCard: (text: string, id: number) => void
    removeCard: (id: number) => void
}

const CardsContext = createContext<ContextType>({} as ContextType)



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
        if (inputRef.current.value.length <= 0) return
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

    function editCard(text: string, id: number) {
        setBingos(() => bingos.map(item => item.id === id ? { ...item, text } : item))
    }

    function saveBingo() {
        axios({
            url: `${process.env.REACT_APP_BACKEND_URL}/create`,
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            data: JSON.stringify({ template: bingos.map(item => item.text) })
        }).then(console.log)
    }

    const context = {
        editCard,
        removeCard
    }

    return (
        <div>
            <CardsContext.Provider value={context}>
                <form onSubmit={addCard}>
                    <input ref={inputRef} />
                    <button type='submit'> Добавить новое поле</button>
                </form>
                <div>
                    {bingos.map((item) => <SingleBingoCard key={item.id} id={item.id} text={item.text} />)}
                </div>
            </CardsContext.Provider>
            <button onClick={() => { saveBingo() }}>Сохранить бинго!</button>
        </div>
    )
}

const SingleBingoCard: FunctionComponent<CardType> = memo(({ text, id }) => {
    const [edit, setEdit] = useState<boolean>(false)

    const changeMode = () => setEdit(prev => !prev)


    return edit ?
        <EditCard text={text} id={id} changeMode={changeMode} /> : (
            <div>
                <span>{text}</span>
                <button onClick={() => setEdit(prev => !prev)}>
                    Редактировать
                </button>
                <button>Удалить</button>
            </div>
        )
})


interface EditProps extends CardType {
    changeMode: () => void
}

const EditCard: FunctionComponent<EditProps> = memo(({ id, text, changeMode }) => {
    const { editCard } = useContext(CardsContext)
    const input = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (!input.current) return
        input.current.value = text
    }, [text])

    return (
        <div>
            <input ref={input}></input>
            <button onClick={() => {
                if (!input.current) return;
                editCard(input.current.value, id)
                changeMode()
            }}>Сохранить</button>
            <button onClick={() => changeMode()}>Отменить</button>
        </div>
    )
})

export default CreateNewBingo