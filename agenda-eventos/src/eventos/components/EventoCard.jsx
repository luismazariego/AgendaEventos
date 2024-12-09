import { Link } from 'react-router-dom';
import { eliminarSuscripcionUsuarioEvento, suscribirUsuarioEvento } from '../helpers/obtenerEventosPorUsuario';
import { useEffect, useState } from 'react';
 
export const EventoCard = (
    {
        id, 
        nombreEvento, 
        fechaEvento, 
        duracion, 
        recurrente, 
        ubicacion,
        usuariosSuscritos = []
    }) => {
   
    const userInfo = JSON.parse(localStorage.getItem('usuario'));
    const [usuarioSuscrito, setUsuarioSuscrito] = useState(false);
    const [usuariosSuscritosState, setUsuariosSuscritosState] = useState(usuariosSuscritos);
    useEffect(() => {
        // Verificamos si el usuario está en la lista de suscritos
        console.log(`evento ${nombreEvento} => ${usuariosSuscritosState}`);
        if (Array.isArray(usuariosSuscritosState)) {
            setUsuarioSuscrito(usuariosSuscritosState.includes(userInfo.id));
        }
    }, [usuariosSuscritosState]); 

    const handleSuscription = async (e) => {
        e.preventDefault();
        let res;

        // Si el usuario está suscrito, eliminamos la suscripción, si no, lo suscribimos
        if (usuarioSuscrito) {
            res = await eliminarSuscripcionUsuarioEvento(userInfo.id, id);
            setUsuariosSuscritosState(usuariosSuscritosState.filter(userId => userId !== userInfo.id));
        } else {
            res = await suscribirUsuarioEvento(userInfo.id, id);
            setUsuariosSuscritosState([...usuariosSuscritosState, userInfo.id]);
        }
        
    }
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
                <div className="card-footer">
                    <a className='btn btn-success btn-sm' onClick={ handleSuscription }>{ usuarioSuscrito ? 'Quitar Suscripcion' : 'Suscribirme'}</a>
                </div>
            </div>
        </div>
    )
}