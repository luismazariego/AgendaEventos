import { useParams } from 'react-router-dom'
import { DetalleEvento } from '../components/DetalleEvento'

export const DetallesEventoPage = () => {
    const { id } = useParams();
    return (
        <>
            <DetalleEvento id={id}/>
        </>
    )
}