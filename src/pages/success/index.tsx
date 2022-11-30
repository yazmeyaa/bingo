import { Link, useLocation } from 'react-router-dom'

function SuccessCreatedBingo() {
    const navigator = useLocation()
    const id = new URLSearchParams(navigator.search).get('id')

    return (
        <main>
            <h1>Бинго создано!</h1>
            <div>
                <span>ID твоего бинго: {id}</span>
            </div>
            <Link to={`/bingo/${id}`}>Перейти в бинго!</Link>
        </main>
    )
}

export default SuccessCreatedBingo