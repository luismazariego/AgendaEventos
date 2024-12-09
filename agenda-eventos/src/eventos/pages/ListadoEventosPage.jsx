import { Link } from 'react-router-dom';
import { ListadoEventos } from '../components/ListadoEventos'

export const ListadoEventosPage = () => {
    return (
        <>
           <div className='mb-2'>
                <h2>Eventos Creados</h2>
                <hr />
                <ListadoEventos />                
           </div>
           <div className="row mb-2">
                <div className='col-2'>
                    <Link className='btn btn-primary' to={'/formulario-evento'}>Crear nuevo <i className="bi bi-plus-lg"></i></Link>
                </div>
                <div className='col-2'>
                    <Link className='btn btn-info' to={'/calendario-eventos'}>Vista de Calendario <i className="bi bi-calendar-event"></i></Link>
                </div>
           </div>
           
        </>
    )
}