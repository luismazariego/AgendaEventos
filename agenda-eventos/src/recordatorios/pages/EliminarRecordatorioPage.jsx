import { useParams } from 'react-router-dom'
import { EliminarRecordatorio } from '../components/EliminarRecordatorio';

export const EliminarRecordatorioPage = () => {
    const {id} = useParams();

    return(
        <>
            <EliminarRecordatorio id={id} />
        </>
    )
}