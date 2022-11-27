import axios from "axios"

async function getBingo(id: number | string) {
    if (typeof id === 'string') id = parseInt(id)
    if (isNaN(id)) throw new Error('Wrong ID')
    const data = await axios<{ id: number, values: string[] }>({
        url: `${process.env.REACT_APP_BACKEND_URL}/bingo`,
        method: 'get',
        params: {
            id: id
        }
    })
    return data.data
}

export default getBingo