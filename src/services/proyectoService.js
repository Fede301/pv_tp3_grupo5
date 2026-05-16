const proyectoService=(()=>{
    let proyectos = [
        {id:1, titulo:"Proyecto 1", estado:"Finalizado", categoria:"Educacion"},
        {id:2, titulo:"Proyecto 2", estado:"En proceso", categoria:"Salud"},
        {id:3, titulo:"Proyecto 3", estado:"Finalizado", categoria:"Tecnologia"},
        {id:4, titulo:"Proyecto 4", estado:"En proceso", categoria:"Educacion"},
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