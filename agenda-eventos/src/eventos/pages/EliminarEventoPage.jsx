import { useParams } from 'react-router-dom'
import { EliminarEvento } from '../components/EliminarEvento';

export const EliminarEventoPage = () => {
    const {id} = useParams();

    return (
        <>
            <EliminarEvento id={id} />
        </>
    )
}