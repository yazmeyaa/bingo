import JoinToBingo from 'pages/joinToBingo'
import SuccessCreatedBingo from 'pages/success'
import { Routes, Route } from 'react-router-dom'
import Bingo from '../pages/bingo'
import CreateNewBingo from '../pages/craeteNewBingo'
import Landing from '../pages/landing'

function Router() {
    return (
        <Routes>
            <Route index element={<Landing />} />
            <Route path='create' element={<CreateNewBingo />} />
            <Route path='create/success' element={<SuccessCreatedBingo />} />
            <Route path='join' element={<JoinToBingo />} />
            <Route path='bingo/:id' element={<Bingo />} />
        </Routes>
    )
}

export default Router