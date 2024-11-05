import { useEffect, useState } from 'react';
import { obtenerEventosPorUsuario } from '../helpers/obtenerEventosPorUsuario'
import { EventoCard } from './EventoCard';


export const ListadoEventos = () => {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const getEventos = async () => {
            const res = await obtenerEventosPorUsuario();
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