import { useNavigate } from 'react-router-dom'

export const AgregarEventoBtb = () => {
    const nav = useNavigate();
    const handleSubmit = () => {
        nav('/formulario-evento');
    } 
    return (
        <button className="btn btn-primary fab" onClick={ handleSubmit }>
            <i className="bi bi-plus-lg"></i>
        </button>
    )
}