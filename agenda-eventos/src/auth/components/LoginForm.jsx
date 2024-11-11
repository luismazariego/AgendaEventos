import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export const LoginForm = ({handleToggleForm, navigate}) => {
    const { login } = useContext( AuthContext );
    
    const [loginData, setLoginData] = useState({
        correo: '',
        password: ''
    });
   
    const onLogin = async (e) => {
        e.preventDefault();
        
        await login(loginData.correo, loginData.password);

        navigate('/listado-eventos', {
            replace: true
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setLoginData({
            ...loginData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <>
            <div>
                <form>
                    <div className="mb-3">
                        <label htmlFor='email' className="form-label">Correo Electr&oacute;nico</label>
                        <input type="email" onChange={ handleChange } name='correo' value={ loginData.correo } className='form-control' id='email' placeholder='Introduce tu correo' required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" onChange={ handleChange } name='password' value={ loginData.password } className="form-control" id="password" placeholder="Introduce tu contraseña" required />
                    </div>
                    <button className='btn btn-success w-100' onClick={ onLogin }>Iniciar Sesi&oacute;n</button>
                </form>
                <hr />
                <div className="text-center">
                    ¿No tienes una cuenta? <button className="btn btn-link" onClick={ handleToggleForm }>Registrarse</button>
                </div>
            </div>
        </>
    )
}