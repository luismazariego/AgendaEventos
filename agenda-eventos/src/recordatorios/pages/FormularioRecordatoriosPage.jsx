import { useNavigate, useParams } from 'react-router-dom'
import { FormularioRecordatorios } from '../components'
import { useEffect, useState } from 'react';
import { obtenerRecordatorioPorId } from '../helpers';


export const FormularioRecordatoriosPage = () => {
    const { id } = useParams();
    const [recordatorio, setRecordatorio] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const getRecordatorio = async () => {
                const res = await obtenerRecordatorioPorId(id);
                console.log(res.data);
                setRecordatorio(res.data);
            };
            getRecordatorio();
        }
    }, [id]);

    const onSave = () => {
        console.log('Recordatorio guardado');
        navigate('/listado-recordatorios');
    }

    return (
        <>
            <FormularioRecordatorios recordatorio={ recordatorio } onSave={ onSave }/>
        </>
    )
}