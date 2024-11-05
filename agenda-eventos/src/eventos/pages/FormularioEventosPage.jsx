import { useNavigate, useParams } from 'react-router-dom'
import { FormularioEvento } from '../components/FormularioEvento'
import { useEffect, useState } from 'react';
import { obtenerEventoPorId } from '../helpers/obtenerEventosPorUsuario';

export const FormularioEventosPage = () => {
    const { id } = useParams();
    const [evento, setEvento] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const getEvento = async () => {
                const res = await obtenerEventoPorId(id);
                setEvento(res.data);
            };
            getEvento();
        }
    }, [id]);

    const handleSave = () => {
        console.log('Evento Guardado');
        navigate('/');
    }
    return (
        <>
            <FormularioEvento evento={evento} onSave={handleSave}/>
        </>
    )
}