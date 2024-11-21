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

export const getDateSVFormat = (fecha) => {
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(fecha).toLocaleDateString('es-SV', dateOptions);
}

export const getTimeSVFormat = (fecha) => {
    const timeOptions = {
        hour: "2-digit", 
        minute: "2-digit"
    }
    return new Date(fecha).toLocaleTimeString('es-SV', timeOptions);
}

