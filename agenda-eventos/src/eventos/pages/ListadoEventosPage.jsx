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
           <Link className='btn btn-primary' to={'/formulario-evento'}>Crear nuevo <i className="bi bi-plus-lg"></i></Link>
        </>
    )
}