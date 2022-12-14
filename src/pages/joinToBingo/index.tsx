import { AxiosError } from "axios"
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import getBingo from "tools/getBingo"
import { Container, Description, Form, Input } from "./styles"



function JoinToBingo() {
    const navigator = useNavigate()
    const inputValue = useRef<HTMLInputElement>(null)
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
    const [fetching, setFetching] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)



    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length > 0) setButtonDisabled(false)
        else setButtonDisabled(true)
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        if (!inputValue.current) return false
        const id = parseInt(inputValue.current.value)
        if (isNaN(id)) return false
        setFetching(true)
        getBingo(id).then(data => {
            if (!data) return false
            navigator(`/bingo/${id}`, {
                state: {
                    bingoTemplate: data.values
                }
            })
        })
            .catch(error => {
                if (error instanceof AxiosError) {
                    if (error.response?.status === 400) setError('Бинго с таким ID не найдено!')
                    if (error.response?.status === 404) setError('Ошибка сервера!')
                }
            })
            .finally(() => {
                setFetching(false)
            })

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {fetching && 'Загрузка!'}
                <Description>
                    Для того чтобы начать играть в бинго нужно ввести его уникальный номер (ID)
                </Description>
                <Input>
                    <h3>Бинго ID</h3>
                    <input onChange={handleInput} type='number' ref={inputValue} />
                </Input>
                <button disabled={buttonDisabled} type="submit" >Войти</button>
                {error && <strong>{error}</strong>}
            </Form>
        </Container>
    )
}

export default JoinToBingo