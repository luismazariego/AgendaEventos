import api from '../../shared/api/api';

export const registrarUsuario = async ({
    nombre,
    correo,
    password,
    confirmarPassword
}) => {
    if (password != confirmarPassword){
        console.log('no same pass');
        return;
    }
    if (correo && password && nombre){
        const response = await api.post('/usuarios', {nombre, password, correo});
        return response;
    }
}

export const loginUsuario = async (correo, password) => {
    const loginDto = {
        correo,
        password
    };
    
    const response = await api.post('/auth/login', loginDto);
    return response;
}