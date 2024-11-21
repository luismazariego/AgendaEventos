import { useEffect, useState } from 'react';
import { differenceInDays, differenceInHours, differenceInMonths } from 'date-fns';
import { getUsuarioId } from '../../shared/helpers/sharedHelper'
import api from '../../shared/api/api';
import { obtenerEventosPorUsuario } from '../../eventos/helpers/obtenerEventosPorUsuario';

export const FormularioRecordatorios = ({
    recordatorio,
    onSave
}) => {

    const id = getUsuarioId();
    const metodosNotificacion = [
        { title: 'Correo', value: 1 }, 
        { title: 'Notificacion Web', value: 2 }, 
        { title: 'Celular', value: 3 }, 
        { title: 'Otro', value: 4 }
    ];
    const periodos = [
        { periodo: 'Diario', value: 2 },
        { periodo: 'Mensual', value: 1 },
        { periodo: 'Por Horas', value: 3 },
        { periodo: 'Por Minutos', value: 4 }
    ];
    const [formData, setFormData] = useState(recordatorio || 
        {
            eventoId: '',
            usuarioId: id,
            fechaInicioRecordatorio: '',
            fechaFinRecordatorio: '',
            metodo: -1,
            recordatorioRecurrente: false,
            periodoTiempo: -1,
            repeticiones: -1
        });

    useEffect(() => {
        if(recordatorio){
            setFormData({
                eventoId: recordatorio.eventoId || '',
                usuarioId: recordatorio.usuarioId || id,
                fechaInicioRecordatorio: recordatorio.fechaInicioRecordatorio || '',
                fechaFinRecordatorio: recordatorio.fechaFinRecordatorio || '',
                metodo: recordatorio.metodo || -1,
                recordatorioRecurrente: recordatorio.recordatorioRecurrente || false,
                periodoTiempo: recordatorio.periodoTiempo || -1,
                repeticiones: recordatorio.repeticiones || -1,
                id: recordatorio.id
            })
        }
    }, [recordatorio])

    const [eventosData, setEventosData] = useState([]);

    useEffect(() => {
        const getEventos = async () => {
            const eventos = await obtenerEventosPorUsuario(id);
            setEventosData(eventos.data);
        };
        getEventos();
    }, [id]);

    const [periodosTiempo, setPeriodosTiempo] = useState([]);
    useEffect(() => {
        const fechaI_js = new Date(formData.fechaInicioRecordatorio);
        const fechaF_js = new Date(formData.fechaFinRecordatorio);

        const getPeriodoTiempo = () => {
            setPeriodosTiempo([]);
            if (differenceInHours(fechaF_js, fechaI_js) > 2 && differenceInHours(fechaF_js, fechaI_js) < 24) {
                setPeriodosTiempo(periodos.filter(p => p.value > 1));
            } else if (differenceInDays(fechaF_js, fechaI_js) > 1 && differenceInDays(fechaF_js, fechaI_js) < 30) {
                setPeriodosTiempo(periodos.filter(p => p.value > 0));
            } else {
                setPeriodosTiempo(periodos);
            }
        };
        getPeriodoTiempo();
    }, [formData.fechaFinRecordatorio]);

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formDataToSend = {
                ...formData,
                metodo: parseInt(formData.metodo),
                periodoTiempo: parseInt(formData.periodoTiempo),
                repeticiones: parseInt(formData.repeticiones)
            }
            console.log('Datos enviados:', formDataToSend)
            if (recordatorio) {
                await api.put('/recordatorios', formDataToSend);
            } else {
                await api.post('/recordatorios', formDataToSend);
            }
            onSave();
        } catch (error) {
            console.error('Error al guardar el recordatorio:', error);
        }
    }

    const handleChange = (e) => { 
        const { name, value, type, checked } = e.target; 
        setFormData(
            { 
                ...formData, 
                [name]: type === 'checkbox' ? checked : value, 
            }); 
    };

    return (
        <>
            <h1 className="mb-2">{recordatorio ? 'Actualizar' : 'Crear'} Recordatorio</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="evento" className="form-label">Seleccione el evento</label>
                    <select className='form-select' 
                            aria-label='Seleccionar Evento' 
                            name='eventoId'
                            onChange={handleChange}
                            value={formData.eventoId}>
                        <option key='-1' value='-1'>Seleccione un evento</option>
                        {eventosData.map(evento => (
                            <option key={evento.id} value={evento.id}>{evento.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="fechaHora" className="form-label">Fecha y Hora de inicio del recordatorio:</label>
                    <input type='datetime-local' 
                           id='fechaHora' 
                           name='fechaInicioRecordatorio' 
                           value={formData.fechaInicioRecordatorio} 
                           onChange={handleChange} 
                           className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="metodo">Seleccione método de notificación</label>
                    <select className='form-select' aria-label='Seleccionar método' id='metodo' name='metodo' onChange={handleChange} value={formData.metodo}>
                        <option value='-1' key='-1'>Seleccione un método de notificación</option>
                        {metodosNotificacion.map(metodo => (
                            <option key={metodo.value} value={metodo.value}>{metodo.title}</option>
                        ))}
                    </select>
                </div>
                {formData.fechaInicioRecordatorio && (
                    <div className="mb-3">
                        <label>
                            Recordatorio Recurrente? <input type="checkbox" 
                                                            name="recordatorioRecurrente" 
                                                            checked={formData.recordatorioRecurrente} 
                                                            onChange={handleChange} />
                        </label>
                    </div>
                )}
                {formData.recordatorioRecurrente && (
                    <>
                        <div className="mb-3">
                            <label htmlFor="fechaHoraFin" className="form-label">Fecha y Hora de fin del recordatorio:</label>
                            <input type='datetime-local' 
                                   id='fechaHoraFin' 
                                   name='fechaFinRecordatorio' 
                                   value={formData.fechaFinRecordatorio} 
                                   onChange={handleChange} 
                                   className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="periodoTiempo">Seleccione el período de tiempo</label>
                            <select name='periodoTiempo' 
                                    id='periodoTiempo' 
                                    className='form-select' 
                                    onChange={handleChange}
                                    value={formData.periodoTiempo}>
                                <option value='-1' key='-1'>Seleccione período de tiempo</option>
                                {periodosTiempo.map(p => (
                                    <option value={p.value} key={p.value}>{p.periodo}</option>
                                ))}
                            </select>
                        </div>
                    </>
                )}
                {formData.periodoTiempo > 1 && (
                    <div className="mb-3">
                        <label htmlFor="repeticiones">Número de veces a enviar recordatorio</label>
                        <input type="number" 
                               name="repeticiones" 
                               id="repeticiones" 
                               className='form-control'
                               onChange={handleChange}
                               value={formData.repeticiones} />
                    </div>
                )}
                <button type="submit" className='btn btn-primary'>{ recordatorio ? 'Actualizar' : 'Crear' } Recordatorio</button>
            </form>
        </>
    );
}
