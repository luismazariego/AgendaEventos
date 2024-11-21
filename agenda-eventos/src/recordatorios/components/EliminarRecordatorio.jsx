import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { RecordatoriosCard } from "../components";
import api from '../../shared/api/api'
import { obtenerEliminarRecordatorioInfoPorId } from '../helpers';


export const EliminarRecordatorio = ({id}) => {
    const [recordatorio, setRecordatorio] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      const getRecordatorio = async () => {
        const response = await obtenerEliminarRecordatorioInfoPorId(id);
        setRecordatorio(response.data);  
      }
      getRecordatorio();
    }, [])
    
    const handleDelete = async (e) => {
        e.preventDefault();
        const res = await api.delete(`/recordatorios/${id}`);
        if(res.status === 204){
            navigate('/');
        }
    }

    if(!recordatorio) return <div>Cargando....</div>

    return(
        <>
            <h2>Desea Eliminar el Recordatorio?</h2>
            <RecordatoriosCard id={ recordatorio.id } 
                               fechaEvento={ recordatorio.fechaEvento }
                               fechaInicio={ recordatorio.fechaInicioRecordatorio }
                               nombreEvento={ recordatorio.nombreEvento }
                               key={ recordatorio.id }/>
            <div className="mt-2">
                <button type='submit' className='btn btn-danger' onClick={handleDelete}>Confirmar</button>
                <Link to={`/detalle-recordatorio/${id}`} className='btn btn-primary'>Cancelar</Link>
            </div>
        </>
    )
}