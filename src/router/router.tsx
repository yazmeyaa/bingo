import { Routes, Route } from 'react-router-dom'
import Bingo from '../pages/bingo'
import CreateNewBingo from '../pages/craeteNewBingo'
import Landing from '../pages/landing'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/create' element={<CreateNewBingo />} />
            <Route path='/bingo' element={<Bingo />} />
        </Routes>
    )
}

export default Router