const proyectoService=(()=>{
    let proyectos = [
        {id:1, titulo:"Proyecto 1", estado:"Finalizado", categortia:"Educacion"},
        {id:2, titulo:"Proyecto 2", estado:"En proceso", categortia:"Salud"},
        {id:3, titulo:"Proyecto 3", estado:"Finalizado", categortia:"Tecnologia"},
        {id:4, titulo:"Proyecto 4", estado:"En proceso", categortia:"Educacion"},
    ];

    const obtenerProyectos = () => [...proyectos];
    const agregarProyectos = (infoProyecto) => proyectos.push(infoProyecto);
    const eliminarProyectos = (idEliminar) => {
        proyectos=proyectos.filter(proyecto => proyecto.id !== idEliminar);
    }
    const buscarProyectos = (idBuscado) => proyectos.find(proyecto => proyecto.id == idBuscado);
    return {obtenerProyectos, agregarProyectos, eliminarProyectos, buscarProyectos};
})();

export default proyectoService;