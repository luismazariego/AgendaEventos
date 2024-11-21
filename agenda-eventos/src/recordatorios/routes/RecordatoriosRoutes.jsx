import { Routes, Route } from 'react-router-dom';

import { ListadoRecordatoriosPage, FormularioRecordatoriosPage } from '../pages';
import { DetallesRecordatorioPage } from '../pages/DetallesRecordatorioPage';
import { EliminarRecordatorioPage } from '../pages/EliminarRecordatorioPage';

export const RecordatoriosRoutes = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path='listado-recordatorios' element={ <ListadoRecordatoriosPage /> } />
                    <Route path='formulario-recordatorio' element = { <FormularioRecordatoriosPage /> } />
                    <Route path='formulario-recordatorio/:id' element = { <FormularioRecordatoriosPage /> } />
                    <Route path='detalle-recordatorio/:id' element = { <DetallesRecordatorioPage /> } />
                    <Route path='elimiar-recordatorio/:id' element = { <EliminarRecordatorioPage /> } />
                    <Route path='/' element={ <ListadoRecordatoriosPage /> } />
                </Routes>
            </div>
        </>
    )
}