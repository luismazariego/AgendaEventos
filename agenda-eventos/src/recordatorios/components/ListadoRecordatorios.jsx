import { useEffect, useState } from 'react'
import { getUsuarioId } from '../../shared';
import { useNavigate } from 'react-router-dom';
import { RecordatoriosCard } from './RecordatoriosCard';
import { obtenerRecordatoriosPorUsuario } from '../helpers';


export const ListadoRecordatorios = () => {
    const [recordatorios, setRecordatorios] = useState([]);
    const id = getUsuarioId();
    const navigate = useNavigate();
    useEffect(() => {
        const getRecordatorios = async () => {
            if (id === ''){
                navigate(to = '/login');
            }
            const res = await obtenerRecordatoriosPorUsuario(id);
            setRecordatorios(res.data);
        };
        getRecordatorios();
    }, []);

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    recordatorios.map(r => (
                        <RecordatoriosCard 
                            key={ r.id }
                            id={ r.id }
                            nombreEvento={ r.nombreEvento }
                            fechaEvento={ r.fechaEvento }
                            fechaInicio={ r.fechaInicioRecordatorio } />
                    ))
                }
            </div>
        </>
    )
}