export const getUsuarioId = () => {
    try {
        // Intentamos obtener el objeto de usuario de localStorage
        const usuario = localStorage.getItem('usuario');
        
        // Si no existe, devolvemos una cadena vacía
        if (!usuario) return '';

        // Parseamos el objeto JSON y extraemos el id
        const { id } = JSON.parse(usuario);

        // Si el id no existe o es null/undefined, devolvemos una cadena vacía        
        return id ?? '';
    } catch (error) {
        // Si ocurre un error en cualquier paso, devolvemos una cadena vacía
        console.error('Error al obtener el usuario desde localStorage:', error);
        return '';
    }
};
