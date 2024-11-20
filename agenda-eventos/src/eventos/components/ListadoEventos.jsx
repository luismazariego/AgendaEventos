import { useEffect, useState } from 'react';
import { obtenerEventosPorUsuario } from '../helpers/obtenerEventosPorUsuario'
import { EventoCard } from './EventoCard';
import { getUsuarioId } from '../../shared/helpers/sharedHelper';


export const ListadoEventos = () => {
    const [eventos, setEventos] = useState([]);
    const id = getUsuarioId();
    console.log(id);
    useEffect(() => {
        const getEventos = async () => {
            const res = await obtenerEventosPorUsuario(id);
            setEventos(res.data);
        };

        getEventos();
    }, []);

    return(
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                eventos.map( evento => (
                    <EventoCard key={evento.id} id={evento.id} nombreEvento={evento.nombre} fechaEvento={evento.fecha} duracion={evento.duracion} recurrente={evento.recurrente} />
                ))
            }
        </div>
    )
}