import React, { useState, useEffect } from 'react';
import api from '../../shared/api/api'
export const FormularioEvento = ({evento, onSave}) => {

    const { id } = JSON.parse(localStorage.getItem('usuario'));

    const patronesRecurrencia = [
        { id: 1, valor: 'Semanal' },
        { id: 2, valor: 'Mensual' },
        { id: 3, valor: 'Anual' },
        { id: 4, valor: 'Diario' },
        { id: 5, valor: 'Unico' },
    ]

    const [formData, setFormData] = useState(
        evento || 
        { 
            nombre: '', 
            usuarioId: id,
            descripcion: '', 
            fecha: '', 
            duracion: '', 
            ubicacion: '', 
            notas: '', 
            recurrente: false, 
            patron: '',
            intervaloRecurrencia: 1,
            fechaFin: ''
        });
    
    useEffect(() => { 
        if (evento) { 
            setFormData({ 
                nombre: evento.nombre || '', 
                descripcion: evento.descripcion || '',
                fecha: evento.fecha || '', 
                duracion: evento.duracion || '', 
                ubicacion: evento.ubicacion || '', 
                notas: evento.notas || '',
                recurrente: evento.recurrente || false, 
                id: evento.id,
                usuarioId: evento.usuarioId,
                fechaFin: evento.fechaFin || '',
                patron: evento.patron || '',
                intervaloRecurrencia: 1
            }); 
        } }, [evento]);

    const handleChange = (e) => { 
        const { name, value, type, checked } = e.target; 
        setFormData(
            { 
                ...formData, 
                [name]: type === 'checkbox' ? checked : value, 
            });
     }; 
    
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        const formDataToSend = {
            ...formData,
            patron: parseInt(formData.patron)
        }
        if (evento) { 
            await api.put(`/eventos`, formDataToSend); 
        } else { 
            await api.post('/eventos', formDataToSend); 
        } 
        onSave();
    }

    return (
        <>
            <h1 className='mb-2'>{evento ? 'Actualizar' : 'Crear'} Evento</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre del evento:</label>
                    <input name='nombre' id='nombre' value={formData.nombre} onChange={handleChange} className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripcion del evento:</label>
                    <textarea name="descripcion" id='descripcion' value={formData.descripcion} onChange={handleChange} className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="fechaHora" className="form-label">Fecha y Hora del evento:</label>
                    <input type='datetime-local' id='fechaHora' name='fecha' value={formData.fecha} onChange={handleChange} className='form-control' />
                </div>
                <div className="mb-3">
                    <label htmlFor="duracion" className="form-label">Duracion en minutos:</label>
                    <input name="duracion" id='duracion' value={formData.duracion} onChange={handleChange} placeholder="Ej: 100" className='form-control' /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="ubicacion" className="form-label">Ubicacion del evento:</label>
                    <input name="ubicacion" id='ubicacion' value={formData.ubicacion} onChange={handleChange} placeholder="Ej: 4° Av. Norte Calle el Calvario, Sonsonate" className='form-control' /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="notas" className="form-label">Nombre del evento:</label>
                    <textarea name="notas" id='notas' value={formData.notas} onChange={handleChange} placeholder="Notas/Instrucciones Adicionales" className='form-control' /> 
                </div>    
                <div className="mb-3">
                    <label> 
                        Recurrente: <input type="checkbox" name="recurrente" checked={formData.recurrente} onChange={handleChange} /> 
                    </label> 
                </div>
                {
                    formData.recurrente && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="patron" className='form-label'>Seleccione el patron de recurrencia:</label>
                                <select className='form-select'
                                        name='patron'
                                        onChange={ handleChange }
                                        value={ formData.patron }>
                                    <option key='-1' value='-1'>Seleccione un patron</option>
                                    {
                                        patronesRecurrencia.map(patron => (
                                            <option key={ patron.id } value={ patron.id }>{ patron.valor }</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='mb-3'>
                                <label className='form-label' htmlFor='fechaFin'>Fecha y Hora de finalizacion del evento</label>
                                <input type='datetime-local'
                                       className='form-control'
                                       id='fechaFin'
                                       name='fechaFin'
                                       onChange={ handleChange }
                                       value={ formData.fechaFin } />
                            </div>
                            {/* <div className="mb-3">
                                <label className='form-label' htmlFor='intervalo'>Numero de ocurrencias</label>
                                <input type="number" 
                                       name="intervaloRecurrencia" 
                                       id="intervalo"
                                       max='5'
                                       className='form-control'
                                       onChange={ handleChange }
                                       value={ formData.intervaloRecurrencia } />
                            </div> */}
                        </>
                    )
                }
                <button type="submit" className='btn btn-primary'>Guardar Evento</button>
            </form>
        </>
        
    )
}