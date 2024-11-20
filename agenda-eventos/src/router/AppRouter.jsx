import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth'
import { EventosRoutes } from '../eventos'
import { PrivateRoute } from './PrivateRoute'
import { RecordatoriosRoutes } from '../recordatorios/routes/RecordatoriosRoutes'
import { Navbar } from '../shared'

export const AppRouter = () => {
    return (
        <>
            <Routes>                
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/*' element={
                    <PrivateRoute>
                        <Navbar />
                        <EventosRoutes />
                        <RecordatoriosRoutes />
                    </PrivateRoute>} />

            </Routes>
        </>
    )
}