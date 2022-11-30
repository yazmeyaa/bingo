import axios from "axios"
import { useRef, useState, FormEvent, FunctionComponent, createContext, useEffect, useContext, memo } from "react"
import { useNavigate } from "react-router-dom"
import { AddNewCardButton, NewCardForm, Input, CardButton, CardContainer, Container, CreatedCardsContainer, ButtonsContainer } from "./styles"


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
    const navigate = useNavigate()

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
        setBingos(() => {
            if (!text) return bingos
            return bingos.map(item => item.id === id ? { ...item, text } : item)
        })
    }

    function saveBingo() {

        type ResponseData = {
            bingo: {
                id: number;
                values: string[];
            }
        }

        axios<ResponseData>({
            url: `${process.env.REACT_APP_BACKEND_URL}/create`,
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            data: JSON.stringify({ template: bingos.map(item => item.text) })
        })
            .then(response => {
                if (response.status !== 200) throw new Error('Произошла ошибка во время обработки запроса!')
                navigate(`success?id=${response.data.bingo.id}`)
            })
    }

    const context = {
        editCard,
        removeCard
    }

    return (
        <Container>
            <CardsContext.Provider value={context}>
                <NewCardForm onSubmit={addCard}>
                    <Input ref={inputRef} />
                    <AddNewCardButton type='submit'> Добавить новое поле</AddNewCardButton>
                </NewCardForm>
                {bingos.length <= 0 ? <h1>Ни одной карточки ещё не добавлено ¯\_(ツ)_/¯</h1> : null}
                <CreatedCardsContainer>
                    {bingos.map((item) => <SingleBingoCard key={item.id} id={item.id} text={item.text} />)}
                </CreatedCardsContainer>
            </CardsContext.Provider>
            {bingos.length > 0 && <button onClick={() => { saveBingo() }}>Сохранить бинго!</button>}
        </Container>
    )
}

const SingleBingoCard: FunctionComponent<CardType> = memo((props) => {
    const [edit, setEdit] = useState<boolean>(false)


    const changeMode = () => setEdit(prev => !prev)


    return edit ? <EditCard {...props} changeMode={changeMode} /> : <IdleCard changeMode={changeMode} {...props} />
})

interface PartiedCardProps extends CardType {
    changeMode: () => void
}

const IdleCard: FunctionComponent<PartiedCardProps> = memo(({ id, text, changeMode }) => {
    const { removeCard } = useContext(CardsContext)
    return (
        <CardContainer>
            <span>{text}</span>
            <ButtonsContainer>
                <CardButton onClick={changeMode}>
                    Редактировать
                </CardButton>
                <CardButton onClick={() => { removeCard(id) }}>Удалить</CardButton>
            </ButtonsContainer>
        </CardContainer>
    )
})


const EditCard: FunctionComponent<PartiedCardProps> = memo(({ id, text, changeMode }) => {
    const { editCard } = useContext(CardsContext)
    const input = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (!input.current) return
        input.current.value = text
    }, [text])

    function handleSumbit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (!input.current) return;
        editCard(input.current.value, id)
        changeMode()
    }

    return (
        <CardContainer onSubmit={handleSumbit}>
            <input ref={input}></input>
            <ButtonsContainer>
                <CardButton type='submit'>Сохранить</CardButton>
                <CardButton onClick={() => changeMode()}>Отменить</CardButton>
            </ButtonsContainer>
        </CardContainer>
    )
})

export default CreateNewBingo