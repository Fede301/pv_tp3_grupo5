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
        <div id='formulario' className="modal fade">
            <div className='modal-dialog'>
                <div className='modal-content'>

                    <div className='modal-header'>
                        <h3>Nuevo Proyecto</h3>
                    </div>
                    <div className='modal-body'>
                        <label htmlFor="titulo" className='form-label'>Título</label>
                        <input type="text" id="titulo" name="titulo" placeholder="Título" value={formulario.titulo} onChange={handleFormulario} className='form-control' />
                        <label htmlFor="categoria" className='form-label'>Categoría</label>
                        <input type="text" id="categoria" name="categoria" placeholder="Categoría" value={formulario.categoria} onChange={handleFormulario} className='form-control' />
                        <label htmlFor="estado" className='form-label'>Estado</label>
                        <input type="text" id="estado" name="estado" placeholder="Estado" value={formulario.estado} onChange={handleFormulario} className='form-control' />
                        <label htmlFor="descripcion" className='form-label'>Descripción</label>
                        <input type="text" id="descripcion" name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={handleFormulario} className='form-control' />
                        <label htmlFor="recursoPdf" className='form-label'>Ruta PDF</label>
                        <input type="text" id="recursoPdf" name="recursoPdf" placeholder="Ruta PDF" value={formulario.recursoPdf} onChange={handleFormulario} className='form-control' />
                        <label htmlFor="equipoNombre" className='form-label'>Nombre integrante</label>
                        <input type="text" id="equipoNombre" name="equipoNombre" placeholder="Nombre integrante" value={formulario.equipoNombre} onChange={handleFormulario} className='form-control' />
                        <label htmlFor="equipoRol" className='form-label'>Rol integrante</label>
                        <input type="text" id="equipoRol" name="equipoRol" placeholder="Rol integrante" value={formulario.equipoRol} onChange={handleFormulario} className='form-control' />

                        <div className='modal-footer mt-4'>
                            <button data-bs-dismiss="modal" className='btn btn-danger'>Cerrar</button>
                            <button onClick={handleSubmit} className='btn btn-success'>Agregar Proyecto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormularioProyecto;