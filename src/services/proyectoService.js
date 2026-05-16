const proyectoService=(()=>{
    let proyectos = [
        {   id:1, titulo:"Proyecto 1", estado:"Finalizado", categoria:"Educacion",
            descripcion: [
                "Este proyecto busca Aplicar conocimientos prácticos, fomentar el trabajo en equipo y desarrollar habilidades específicas del área.",
                "Realizamos experimentos para comprender fenómenos como la energía, el movimiento y la electricidad."
            ],
            recursos: { pdf: "/recursos/Taller de Física.pdf"},
            equipo: [
                {   nombre: "Juan Pérez", rol: "Docente de Física"},
                {   nombre: "Ana Gómez", rol: "Asistente"}
            ]
        },
        {   id:2, titulo:"Proyecto 2", estado:"En proceso", categoria:"Salud",
            descripcion: [
                "Este proyecto busca Aplicar conocimientos prácticos, fomentar el trabajo en equipo y desarrollar habilidades específicas del área.",
                "Exploramos distintas técnicas artísticas como acuarela y acrílico, fomentando la creatividad y la expresión personal."
            ],
            recursos: { pdf: "/recursos/Taller de Pintura.pdf"},
            equipo: [
                {   nombre: "Ana Gómez", rol: "Docente de Arte"},
                {   nombre: "Lucas Sivila", rol: "Asistente"}
            ]
        },
        {   id:3, titulo:"Proyecto 3", estado:"Finalizado", categoria:"Tecnologia",
            descripcion: [
                "Este proyecto busca Aplicar conocimientos prácticos, fomentar el trabajo en equipo y desarrollar habilidades específicas del área.",
                "En este taller desarrollamos proyectos utilizando componentes electrónicos y programación básica para construir y controlar robots."
            ],
            recursos: { pdf: "/recursos/Taller de Robótica.pdf"},
            equipo: [
                {   nombre: "Lucas Sivila", rol: "Docente de Robotica"},
                {   nombre: "Maria Juarez", rol: "Asistente"}
            ]
        },
        {   id:4, titulo:"Proyecto 4", estado:"En proceso", categoria:"Educacion",
            descripcion: [
                "Este proyecto busca Aplicar conocimientos prácticos, fomentar el trabajo en equipo y desarrollar habilidades específicas del área.",
                "Creamos y producimos programas radiales, desarrollando habilidades de comunicación y trabajo en equipo."
            ],
            recursos: { pdf: "/recursos/Taller de Radio Escolar.pdf"},
            equipo: [
                {   nombre: "Maria Juarez", rol: "Docente de Comunicacion"},
                {   nombre: "Juan Pérez", rol: "Asistente"}
            ]
        },
    ];

    const obtenerProyectos = () => [...proyectos];
    const agregarProyectos = (infoProyecto) => proyectos.push(infoProyecto);
    const eliminarProyectos = (idEliminar) => {
        proyectos=proyectos.filter(proyecto => proyecto.id !== idEliminar);
    }
    const buscarProyecto = (textoBuscado) =>
        proyectos.filter(proyecto => proyecto.titulo.toLowerCase().includes(textoBuscado.toLowerCase()));
    return {obtenerProyectos, agregarProyectos, eliminarProyectos, buscarProyecto};
})();

export default proyectoService;

export const {obtenerProyectos, agregarProyectos, eliminarProyectos, buscarProyecto} = proyectoService;