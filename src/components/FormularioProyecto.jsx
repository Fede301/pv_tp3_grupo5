import React, { useState } from 'react';

const FormularioProyecto = ({ onAgregar }) => {

    const [formulario, setFormulario] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        recursoPdf: "",
        equipoNombre: "",
        equipoRol: ""
    });

    const handleFormulario = (evento) => {
        const { name, value } = evento.target;
        setFormulario((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const { titulo, categoria, estado } = formulario;

        if (!titulo || !categoria || !estado) return;

        onAgregar(formulario);

        setFormulario({
            titulo: "",
            categoria: "",
            estado: "",
            descripcion: "",
            recursoPdf: "",
            equipoNombre: "",
            equipoRol: ""
        });
    };

    return (
        <div className="formulario">
            <h3>Agregar Proyecto</h3>
            <input type="text" name="titulo" placeholder="Título" value={formulario.titulo} onChange={handleFormulario} />
            <input type="text" name="categoria" placeholder="Categoría" value={formulario.categoria} onChange={handleFormulario} />
            <input type="text" name="estado" placeholder="Estado" value={formulario.estado} onChange={handleFormulario} />
            <input type="text" name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={handleFormulario} />
            <input type="text" name="recursoPdf" placeholder="Ruta PDF" value={formulario.recursoPdf} onChange={handleFormulario} />
            <input type="text" name="equipoNombre" placeholder="Nombre integrante" value={formulario.equipoNombre} onChange={handleFormulario} />
            <input type="text" name="equipoRol" placeholder="Rol integrante" value={formulario.equipoRol} onChange={handleFormulario} />
            
            <button onClick={handleSubmit}>Agregar Proyecto</button>
        </div>
    );
};

export default FormularioProyecto;