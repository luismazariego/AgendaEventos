import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { obtenerRecordatorioPorId } from '../helpers/recordatoriosHelper';
import { getDateSVFormat, getTimeSVFormat } from '../../shared/helpers/sharedHelper';

export const DetalleRecordatorio = ({ id }) => {
    const [recordatorio, setRecordatorio] = useState();

    useEffect(() => {
        console.log('entrando al get effect');
        const getRecordatorio = async () => {
            const res = await obtenerRecordatorioPorId(id);
            setRecordatorio(res.data);
        };
        getRecordatorio();
    }, []);

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

    if(!recordatorio) return <div>Cargando ...</div>

    return(
        <>
            <div className="container mt-5">
                <div className="text-center mb-4">
                    <h1>Recordatorio</h1>
                </div>

                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Informacion del Recordatorio</h3>
                        
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><strong>Nombre del Evento:</strong> { recordatorio.nombreEvento }</li>
                            <li className="list-group-item"><strong>Fecha del Evento:</strong> { getDateSVFormat(recordatorio.fechaEvento) } a las: { getTimeSVFormat(recordatorio.fechaEvento) } </li>
                            <li className="list-group-item"><strong>Ubicación del Evento:</strong> { recordatorio.ubicacionEvento }</li>
                            <li className="list-group-item"><strong>Fecha de Inicio del Recordatorio:</strong> { getDateSVFormat(recordatorio.fechaInicioRecordatorio) } a las: { getTimeSVFormat(recordatorio.fechaInicioRecordatorio) } </li>
                            <li className="list-group-item"><strong>Fecha de Fin del Recordatorio:</strong> { getDateSVFormat(recordatorio.fechaFinRecordatorio) } a las: { getTimeSVFormat(recordatorio.fechaFinRecordatorio) }</li>
                            <li className="list-group-item"><strong>Método:</strong> { recordatorio && metodosNotificacion.find(m => m.value == recordatorio.metodo).title } </li>
                            <li className="list-group-item"><strong>Recordatorio Recurrente:</strong> { recordatorio.recordatorioRecurrente ? 'Si' : 'No' }</li>
                            <li className="list-group-item"><strong>Período de Tiempo:</strong> { recordatorio && periodos.find(p => p.value == recordatorio.periodoTiempo).periodo }</li>
                            { recordatorio.repeticiones > 0 && (<li className="list-group-item"><strong>Repeticiones:</strong> {recordatorio.repeticiones} </li>)}
                        </ul>
                    </div>

                    <div class="card-footer text-center">
                        <Link to={`/formulario-recordatorio/${recordatorio.id}`} class="btn btn-warning me-2">Modificar</Link>
                        <Link to={`/elimiar-recordatorio/${recordatorio.id}`} class="btn btn-danger">Eliminar</Link>
                    </div>
                </div>
            </div>
        </>
    )
}