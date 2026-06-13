import React, { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        nombre: 'Ramiro Gutierrez',
        dni: '12345678',
        rol: 'Alumno', 
        institucion: 'Facultad de Ingeniería - UNJU'
    });

   
    const actualizarPerfil = (nuevosDatos) => {
        setUsuario(nuevosDatos);
    };

    return (
        <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
            {children}
        </UsuarioContext.Provider>
    );
};

//prueba