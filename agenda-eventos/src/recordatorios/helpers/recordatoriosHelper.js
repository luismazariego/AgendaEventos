import  api  from '../../shared/api/api';

export const obtenerRecordatoriosPorUsuario = async (usuarioId) => {
    const recordatorios = await api.get(`/recordatorios/usuario/${ usuarioId }`);
    return recordatorios;
}