import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';

export const LoginPage = () => {

    const navigate = useNavigate();
    const [isRegistering, setIsRegistering] = useState(false);

    const handleToggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">{ isRegistering ? 'Registrarse' : 'Iniciar sesión'}</h5>
                        {
                            !isRegistering 
                                ? (<LoginForm handleToggleForm={handleToggleForm} navigate={navigate}/>) 
                                : (<RegisterForm handleToggleForm={handleToggleForm} navigate={navigate}/>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
