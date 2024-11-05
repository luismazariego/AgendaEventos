import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CalendarComponent from '../../shared/components/Calendar';
import { obtenerEventoPorId } from '../helpers/obtenerEventosPorUsuario';

export const DetalleEvento = ({ id }) => {
    const [evento, setEvento] = useState();

    useEffect(() => {
        const getEvento = async () => {
            const response = await obtenerEventoPorId(id);
            setEvento(response.data);
        };
        getEvento();
    }, [])
    
    if(!evento) return <div>Cargando ....</div>

    return (
        <div key={evento.id} className='px-4 pt-5 my-5 text-center border-bottom'>
            <h1 className="display-4 fw-bold text-body-emphasis">
                { evento.nombre }
            </h1>
            <Link to={`/formulario-evento/${evento.id}`} className='btn btn-primary'> Modificar Evento </Link>
            <Link to={`/eliminar-evento/${evento.id}`} className='btn btn-warning'> Eliminar Evento </Link>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    { evento.descripcion }
                </p>
            </div>
            <div className="overflow-hidden">
                <div className="container px-1">
                    <div className="row">
                        <div className="col-4">
                            <p><i className="bi bi-geo-alt-fill"></i> { evento.ubicacion }</p>
                            <p>Ubicacion del evento</p>
                            <div style={{overflow: 'hidden', resize: 'none', maxWidth: '100%', width:'500px', height:'500px'}}>
                                <div id="embed-map-canvas" style={{height: '100%', width:'100%', maxWidth:'100%'}}>
                                    <iframe style={{height:'85%',width:'85%',border:0}}
                                            src={`https://www.google.com/maps/embed/v1/place?q=${evento.ubicacion}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <img src={ evento.urlImagen ? evento.urlImagen : 'https://i.pinimg.com/originals/8b/f8/e6/8bf8e6ab14d7d68b5250d175a4d661d2.jpg' } 
                                alt='roster' 
                                className='img-fluid border rounded-3 shadow-lg mb-4'
                                width={400}
                                height={250}
                                loading='lazy'/>
                        </div>
                        <div className="col-3">
                                Fecha: {new Date(evento.fecha).toLocaleDateString()}
                                <CalendarComponent dateP={evento.fecha}/>
                            <p>
                                Hora: { new Date(evento.fecha).toLocaleTimeString() } <br />
                                Duracion: { evento.duracion } minutos
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            { 
                evento.notas && 
                ( 
                    <div className="col-lg-6 mx-auto"> 
                        <p>{ evento.notas }</p> 
                    </div> 
                )
            }
        </div>
    )
}