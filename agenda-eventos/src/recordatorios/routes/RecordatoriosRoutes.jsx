import { Routes, Route } from 'react-router-dom';

import { ListadoRecordatoriosPage, FormularioRecordatoriosPage } from '../pages';

export const RecordatoriosRoutes = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path='listado-recordatorios' element={ <ListadoRecordatoriosPage /> } />
                    <Route path='formulario-recordatorio' element = { <FormularioRecordatoriosPage /> } />
                    <Route path='/' element={ <ListadoRecordatoriosPage /> } />
                </Routes>
            </div>
        </>
    )
}