import { Link } from 'react-router-dom'
import { ListadoRecordatorios } from '../components/ListadoRecordatorios'

export const ListadoRecordatoriosPage = () => {
    return (
        <>
            <div className="mb-2">
                <h2>Listado Recordatorios</h2>
                <hr />
                <ListadoRecordatorios />
            </div>
            <Link className='btn btn-primary' to='/formulario-recordatorio'>Crear nuevo recordatorio</Link>
        </>
    )
}