import { useNavigate, useParams } from 'react-router-dom'
import { FormularioRecordatorios } from '../components'
import { useEffect, useState } from 'react';


export const FormularioRecordatoriosPage = () => {
    const { id } = useParams();
    const [recordatorio, setRecordatorio] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const getRecordatorio = async () => {
                const res = await obtenerRecordatorioPorId(id);
                setRecordatorio(res.data);
            };
            getRecordatorio();
        }
    }, [id]);

    const onSave = () => {
        console.log('Recordatorio guardado');
        navigate('/');
    }

    return (
        <>
            <FormularioRecordatorios recordatorio={ recordatorio } onSave={ onSave }/>
        </>
    )
}