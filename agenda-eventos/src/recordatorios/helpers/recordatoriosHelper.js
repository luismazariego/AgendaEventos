import  api  from '../../shared/api/api';

export const obtenerRecordatoriosPorUsuario = async (usuarioId) => {
    const recordatorios = await api.get(`/recordatorios/usuario/${ usuarioId }`);
    return recordatorios;
}

export const obtenerRecordatorioPorId = async (id) => {
    const recordatorio = await api.get(`/recordatorios/${ id }`);
    return recordatorio;
}

export const obtenerEliminarRecordatorioInfoPorId = async (id) => {
    const recordatorio = await api.get(`/recordatorios/recordatorio-resumen/${id}`);
    return recordatorio;
}