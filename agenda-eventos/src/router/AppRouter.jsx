import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth'
import { EventosRoutes } from '../eventos'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {
    return (
        <>
            <Routes>                
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/*' element={
                    <PrivateRoute>
                        <EventosRoutes />
                    </PrivateRoute>} />

            </Routes>
        </>
    )
}