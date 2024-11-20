// data simulada
// const eventos = [
//     { 
//         "id": "53844354-f386-4b72-a5f0-63dbd2a4d86d", 
//         "nombreEvento": "libero non mattis pulvinar nulla pede", 
//         "descripcion": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.", 
//         "fecha": "2025-02-11T20:00:00", 
//         "hora": "9:31 AM", 
//         "ubicacion": "4 Oriole Way", 
//         "duracion": 598, 
//         "notas": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
//         "usuario": "usuario1" 
//     },
//     { 
//         "id": "1898bed5-a3b0-42f2-b521-8518aa447a3e", 
//         "nombreEvento": "morbi non lectus aliquam",
//         "descripcion": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.", 
//         "fecha": "2025-08-11T22:00:00", 
//         "hora": "10:38 AM", 
//         "ubicacion": "1 Sycamore Lane", 
//         "duracion": 6019, 
//         "notas": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
//         "usuario": "usuario1" 
//     },
//     { 
//         "id": "edd6c21c-776c-406d-9851-f22fff92e59f", 
//         "nombreEvento": "ut nunc vestibulum ante",
//         "descripcion": "Sed ante. Vivamus tortor. Duis mattis egestas metus.", 
//         "fecha": "2025-04-02T12:00:00", 
//         "hora": "5:01 PM", 
//         "ubicacion": "0 Moose Point", 
//         "duracion": 7528, 
//         "notas": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
//         "usuario": "usuario2" 
//     },
//     { 
//         "id": "4cba195a-9242-40d8-8c5e-2c54eee0d8b6", 
//         "nombreEvento": "donec ut mauris eget massa tempor",
//         "descripcion": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", 
//         "fecha": "2025-01-12T08:45:00", 
//         "hora": "2:36 PM", 
//         "ubicacion": "35 Lerdahl Alley", 
//         "duracion": 8233, 
//         "notas": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
//         "usuario": "usuario2" 
//     },
//     { 
//         "id": "07fc83f0-a4dd-483c-86d4-540c3cd5d04a", 
//         "nombreEvento": "in lacus curabitur at ipsum ac",
//         "descripcion": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", 
//         "fecha": "2025-03-10T11:22:00", 
//         "hora": "3:58 AM", 
//         "ubicacion": "001 Main Hill", 
//         "duracion": 7881, 
//         "notas": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
//         "usuario": "usuario3" 
//     }
// ]

import api from '../../shared/api/api';

export const obtenerEventosPorUsuario = async (usuarioId) => {
    const eventoResponse = await api.get(`/eventos/usuario/${usuarioId}`);
    return eventoResponse;
}

export const obtenerEventoPorId = async (id) => {
    const evento = await api.get(`/eventos/${id}`);
    return evento;
}

export const obtenerEliminarEventoInfoPorId = async (id) => {
    const evento = await api.get(`/eventos/evento-resumen/${id}`);
    return evento;
}

