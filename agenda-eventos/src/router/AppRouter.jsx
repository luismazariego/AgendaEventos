import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth'
import { EventosRoutes } from '../eventos'

export const AppRouter = () => {
    return (
        <>
            <Routes>                
                <Route path='login' element={<LoginPage />}></Route>
                <Route path='/*' element={<EventosRoutes />}></Route>
            </Routes>
        </>
    )
}