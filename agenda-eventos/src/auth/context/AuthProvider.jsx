import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

import { loginUsuario } from '../helpers/authHelper';
import { types } from '../types';

const init = () => {
    const user = JSON.parse(localStorage.getItem('usuario'));
    
    return {
        logged: !!user,
        usuario: user
    };
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer( authReducer, {}, init );
    
    const login = async ( correo = '', password = '') => {
        
        const result = await loginUsuario(correo, password);
        
        if (result.status === 200 && result.data?.id) {
            localStorage.setItem('usuario', JSON.stringify( result.data ));
        }
        
        const action = {
            type: types.login,
            payload: result.data
        };
        dispatch(action);
    }
    
    const logout = () => {
        localStorage.removeItem('usuario');
        const action = { type: types.logout };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{ ...state, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}