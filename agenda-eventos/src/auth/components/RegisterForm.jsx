import { useState } from 'react';
import { registrarUsuario } from '../helpers/authHelper';

export const RegisterForm = ({ handleToggleForm, navigate }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        password: '',
        confirmarPassword: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const onRegister = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del botón
        const result = await registrarUsuario(formData);
        console.log(result);
        
        if (result && (result.status === 201 || result.status == 201)) {
            console.log('Status si es 201')
            handleToggleForm();
            navigate('/login?', {
                replace: true,
            });
        }
    };

    return (
        <>
            <div>
                <form onSubmit={onRegister}>
                    <div className="mb-3">
                        <label htmlFor='nombre' className="form-label">Nombre</label>
                        <input
                            type="text"
                            className='form-control'
                            id='nombre'
                            name='nombre'
                            placeholder='Introduce tu Nombre'
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='correo' className="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            className='form-control'
                            id='correo'
                            name='correo'
                            placeholder='Introduce tu correo'
                            value={formData.correo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name='password'
                            placeholder="Introduce tu contraseña"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmarPassword" className="form-label">Confirmar Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmarPassword"
                            name='confirmarPassword'
                            placeholder="Confirma tu contraseña"
                            value={formData.confirmarPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className='btn btn-success w-100'>Registrarse</button>
                </form>
                <hr />
                <div className="text-center">
                    ¿Ya tienes una cuenta? <button className="btn btn-link" onClick={handleToggleForm}>Iniciar sesión</button>
                </div>
            </div>
        </>
    );
}
