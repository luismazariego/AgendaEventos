import { Link } from 'react-router-dom';

export const RecordatoriosCard = (
    {
        id,
        nombreEvento,
        fechaEvento,
        fechaInicio
    }) => {

    const fechaEventoJS = new Date(fechaEvento);
    const fechaInicioJS = new Date(fechaInicio);
    const opcionesFecha = { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const opcionesHora = {
        hour: 'numeric',
        minute: 'numeric'
    };
    const horaTexto = (fecha) => {
        const esSingular = fecha.getHours() === 1;
        return esSingular ? 'la' : 'las'
    }
    return(
        <>
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className='card-title'>{ nombreEvento }</h5>
                        <p className="card-text">
                            A realizarse el dia: { fechaEventoJS.toLocaleDateString('es-SV', opcionesFecha) }
                            &nbsp;a { horaTexto(fechaEventoJS) } { fechaEventoJS.toLocaleTimeString('es-SV', opcionesHora) }</p>
                        <p className="card-text">
                            Inicio de Recordatorio: { fechaInicioJS.toLocaleDateString('es-SV', opcionesFecha) }
                            &nbsp;a { horaTexto(fechaInicioJS) } { fechaInicioJS.toLocaleTimeString('es-SV', opcionesHora) } </p>
                        <Link className='card-link' to={`/detalle-recordatorio/${ id }`}> Ver mas Detalles </Link>
                    </div>
                </div>
            </div>
        </>
    )
}