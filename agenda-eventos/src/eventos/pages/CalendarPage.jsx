import { Calendar } from 'react-big-calendar'
import { addHours, addMinutes } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { localizer } from '../helpers/calendarLocalizer'
import { obtenerMensajesEs } from '../helpers/mensajesCalendario'
import { EventoCalendario } from '../components/EventoCalendario'
import { useEffect, useState } from 'react'
import { obtenerEventos } from '../helpers/obtenerEventosPorUsuario'
import { useNavigate } from 'react-router-dom'
import { AgregarEventoBtb } from '../components/AgregarEventoBtn'
import { getUsuarioId } from '../../shared/helpers/sharedHelper'

export const CalendarPage = () => {

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
    const [eventos, setEventos] = useState([]);
    const navigate = useNavigate();
    const usuarioId = getUsuarioId();

    useEffect(() => {
        const getEventos = async () => {
            const eventosResp = await obtenerEventos();
            setEventos(eventosResp.data)
        };
        getEventos();
    }, [])
    
    const calendarEvents = eventos.map(ev => ({
        title: ev.nombre,
        notes: ev.notas,
        start: new Date(ev.fecha),
        end: addMinutes(new Date(ev.fecha), ev.duracion),
        bgColor: '#fafafa',
        location: ev.ubicacion,
        id: ev.id,
        usuariosSuscritos: ev.usuariosSuscritos
    }));

    const eventStyleGetter = (event, start, end, isSelected) => {
        
        const usuarioInscrito = event.usuariosSuscritos.includes(usuarioId);
        console.log({ test: usuarioInscrito, id: usuarioId })
        const style = {
            backgroundColor: usuarioInscrito ? '#11aa11' : '#347cf7',
            borderRadius: '0px',
            opacity: 0.8, 
            color: 'white'
        }
        return { style }
    }

    const onDoubleClick = (event) => {
        navigate(`/detalles-evento/${event.id}`);
    }
    const onSelect = (event) => {
        console.log({ select: event })
    }
    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event);
    }

    return (
        <>
            <div>
                <Calendar
                    culture='es'
                    onDoubleClickEvent={ onDoubleClick }
                    onSelectEvent={ onSelect }
                    onView={ onViewChanged }
                    defaultView={ lastView }
                    localizer={ localizer }
                    startAccessor='start'
                    endAccessor='end'
                    events={calendarEvents}
                    style={{height: 'calc( 100vh - 56px )'}}
                    messages={ obtenerMensajesEs() }
                    eventPropGetter={ eventStyleGetter }
                    components={ {
                        event: EventoCalendario
                    } } />

                    <AgregarEventoBtb />
            </div>
        </>
    )
}