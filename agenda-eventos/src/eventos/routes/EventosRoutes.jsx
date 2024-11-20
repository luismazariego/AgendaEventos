import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../../shared'
import { ListadoEventosPage, FormularioEventosPage, DetallesEventoPage } from '../pages'
import { EliminarEventoPage } from '../pages/EliminarEventoPage'

export const EventosRoutes = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path='listado-eventos' element={<ListadoEventosPage />}></Route>
                    <Route path='formulario-evento' element={<FormularioEventosPage />}></Route>
                    <Route path='formulario-evento/:id' element={<FormularioEventosPage />}></Route>
                    <Route path='detalles-evento/:id' element={<DetallesEventoPage />}></Route>
                    <Route path='eliminar-evento/:id' element={<EliminarEventoPage />}></Route>
                    
                    <Route path='/' element={<Navigate to='/listado-eventos' />}></Route>
                </Routes>
            </div>            
        </>
    )
}