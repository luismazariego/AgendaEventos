import { Link } from 'react-router-dom';
 
export const EventoCard = ({id, nombreEvento, fechaEvento, duracion, recurrente, ubicacion}) => {
    return(
        <div className="col">
            <div className="card">
                <div className="card-header">
                    <Link to={`/detalles-evento/${ id }`}>
                        { nombreEvento }
                    </Link>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Fecha del evento: {new Date(fechaEvento).toLocaleDateString()}</li>
                    {duracion && (<li className="list-group-item">Duracion: {duracion} minutos</li>)}
                    {ubicacion && (<li className="list-group-item">Ubicacion: {ubicacion} </li>)}
                    <li className="list-group-item">Es recurrente: {recurrente ? 'Si' : 'No'} </li>
                </ul>
            </div>
        </div>
    )
}