import { useParams } from 'react-router-dom'
import { DetalleRecordatorio } from "../components";
export const DetallesRecordatorioPage = () => {
    const { id } = useParams();
    return(
    <>
        <DetalleRecordatorio id={id} />
    </>)
}