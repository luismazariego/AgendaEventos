import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { EventoCard } from './EventoCard'
import { obtenerEliminarEventoInfoPorId } from '../helpers/obtenerEventosPorUsuario'; 
import api from '../../shared/api/api'

export const EliminarEvento = ({id}) => {
    const [evento, setEvento] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        const getEvento = async () => {
            const response = await obtenerEliminarEventoInfoPorId(id);
            console.log(response.data);
            setEvento(response.data);
        };
        getEvento();
    }, []);

    const handleDelete = async (e) => {
        e.preventDefault();
        const res = await api.delete(`/eventos/${id}`);
        console.log(res);
        if(res.status === 204){
            navigate('/');
        }
    }

    if(!evento) return <div>Cargando</div>

    return(
        <>
            <h2>Desea Eliminar el evento?</h2>
            <EventoCard id={id} nombreEvento={evento.nombre} ubicacion={evento.ubicacion} fechaEvento={evento.fecha} recurrente={evento.recurrente}/>
            <div className='mt-2'>
                <button type="submit" className='btn btn-danger' onClick={handleDelete}>Confirmar</button>
                <Link to={`/detalles-evento/${id}`} className='btn btn-primary'>Cancelar</Link>
            </div>
        </>
    )
}
