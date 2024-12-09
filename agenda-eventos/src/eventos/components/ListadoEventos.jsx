import { useEffect, useState } from 'react';
import { obtenerEventos } from '../helpers/obtenerEventosPorUsuario'
import { EventoCard } from './EventoCard';


export const ListadoEventos = () => {
    const [eventos, setEventos] = useState([]);
    useEffect(() => {
        const getEventos = async () => {
            try {
                const res = await obtenerEventos();
                if(res.status == 200) {
                    setEventos(res.data);
                }
            } catch (error) {
                console.log(error.response.data);
            }
        };
        getEventos();
    }, []);

    return(
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                eventos.length > 0 ? eventos.map( evento => (
                    <EventoCard key={evento.id} 
                                id={evento.id} 
                                nombreEvento={evento.nombre} 
                                fechaEvento={evento.fecha} 
                                duracion={evento.duracion} 
                                recurrente={evento.recurrente} 
                                usuariosSuscritos={evento.usuariosSuscritos} />
                )) : <p>Aun no hay Eventos Creados!</p>
            }
            
        </div>
    )
}