import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../../shared'
import { ListadoEventosPage, FormularioEventosPage, DetallesEventoPage } from '../pages'


export const EventosRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='listado-eventos' element={<ListadoEventosPage />}></Route>
                    <Route path='formulario-evento' element={<FormularioEventosPage />}></Route>
                    <Route path='detalles-evento' element={<DetallesEventoPage />}></Route>
                    
                    <Route path='/' element={<Navigate to='/listado-eventos' />}></Route>
                </Routes>
            </div>            
        </>
    )
}