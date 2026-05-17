const proyectoService = (() => {
    let proyectos = [
        {
            id: 1,
            titulo: "Taller de Física Experimental",
            estado: "Finalizado",
            categoria: "Educacion",
            descripcion: [
                "Espacio diseñado para aplicar conceptos teóricos mediante la experimentación directa, promoviendo el pensamiento crítico y el método científico.",
                "Realizamos montajes prácticos y simulaciones para comprender fenómenos complejos como la conservación de la energía, las leyes del movimiento y los principios de la electricidad."
            ],
            recursos: { pdf: "/recursos/Taller de Física.pdf" },
            equipo: [
                { nombre: "Juan Pérez", rol: "Docente de Física Principal" },
                { nombre: "Ana Gómez", rol: "Coordinadora de Laboratorio" },
                { nombre: "Carlos Mendoza", rol: "Especialista en Termodinámica" },
                { nombre: "Laura Benítez", rol: "Supervisora de Seguridad" },
                { nombre: "Tomás Ríos", rol: "Asistente Técnico de Equipamiento" }
            ]
        },
        {
            id: 2,
            titulo: " Taller de Expresión Artística y Salud",
            estado: "En proceso",
            categoria: "Salud",
            descripcion: [
                "Iniciativa terapéutica y educativa que utiliza el arte como herramienta para mejorar el bienestar emocional, la concentración y la salud mental de los participantes.",
                "Exploramos distintas técnicas plásticas como la acuarela, el acrílico y el modelado, fomentando la libre expresión, la motricidad fina y la gestión del estrés."
            ],
            recursos: { pdf: "/recursos/Taller de Pintura.pdf" },
            equipo: [
                { nombre: "Ana Gómez", rol: "Docente de Arte y Terapeuta" },
                { nombre: "Lucas Sivila", rol: "Psicólogo Institucional" },
                { nombre: "Sofía Ortíz", rol: "Tallerista de Artes Plásticas" },
                { nombre: "Martín Palermo", rol: "Coordinador de Logística" },
                { nombre: "Elena Toranzos", rol: "Asistente de Integración Social" }
            ]
        },
        {
            id: 3,
            titulo: " Taller de Robótica y Automatización",
            estado: "Finalizado",
            categoria: "Tecnologia",
            descripcion: [
                "Programa tecnológico orientado a introducir a los estudiantes en las bases de la ingeniería mecatrónica y el pensamiento computacional.",
                "En este taller diseñamos, ensamblamos y programamos prototipos robóticos autónomos utilizando hardware abierto, sensores avanzados y lógica de programación estructurada."
            ],
            recursos: { pdf: "/recursos/Taller de Robótica.pdf" },
            equipo: [
                { nombre: "Lucas Sivila", rol: "Docente de Robótica e Ingeniería" },
                { nombre: "Maria Juarez", rol: "Desarrolladora de Software Educativo" },
                { nombre: "Diego Armando", rol: "Técnico en Electrónica" },
                { nombre: "Patricia Sosa", rol: "Especialista en Diseño e Impresión 3D" },
                { nombre: "Nicolás Fuentes", rol: "Soporte Técnico de Hardware" }
            ]
        },
        {
            id: 4,
            titulo: "Taller de Radio y Comunicación Escolar",
            estado: "En proceso",
            categoria: "Educacion",
            descripcion: [
                "Proyecto pedagógico enfocado en el desarrollo de competencias comunicativas, la expresión oral y la alfabetización mediática.",
                "Los participantes crean, guionan y producen contenidos radiales y podcasts en vivo, potenciando el trabajo colaborativo, la investigación periodística y el uso de herramientas digitales de audio."
            ],
            recursos: { pdf: "/recursos/Taller de Radio Escolar.pdf" },
            equipo: [
                { nombre: "Maria Juarez", rol: "Docente de Comunicación y Periodismo" },
                { nombre: "Juan Pérez", rol: "Operador Técnico y Editor de Audio" },
                { nombre: "Guillermo Barros", rol: "Guionista y Redactor de Contenido" },
                { nombre: "Florencia Kirchner", rol: "Fonoaudióloga y Coach Vocal" },
                { nombre: "Claudio Paul", rol: "Coordinador de Difusión y Redes" }
            ]
        }
    ];

    const obtenerProyectos = () => [...proyectos];
    const agregarProyectos = (infoProyecto) => proyectos.push(infoProyecto);
    const eliminarProyectos = (idEliminar) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== idEliminar);
    }
    const buscarProyecto = (textoBuscado) =>
        proyectos.filter(proyecto => proyecto.titulo.toLowerCase().includes(textoBuscado.toLowerCase()));
    return { obtenerProyectos, agregarProyectos, eliminarProyectos, buscarProyecto };
})();

export default proyectoService;

export const { obtenerProyectos, agregarProyectos, eliminarProyectos, buscarProyecto } = proyectoService;