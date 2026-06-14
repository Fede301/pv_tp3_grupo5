import React, { createContext, useState, useEffect } from 'react';

export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
    //Inicialización perezosa leyendo de LocalStorage
    const [usuario, setUsuario] = useState(() => {
        const datosGuardados = localStorage.getItem('usuario_perfil');
        // Si hay datos guardados (?) los transformamos con JSON.parse, si no usa los de por defecto
        return datosGuardados ? JSON.parse(datosGuardados) : {
            nombre: 'Ramiro Gutierrez',
            dni: '12345678',
            rol: 'Alumno', 
            institucion: 'Facultad de Ingeniería - UNJU'
        };
    });

    //Guardado automático cada vez que cambie el estado 'usuario'
    useEffect(() => {
        localStorage.setItem('usuario_perfil', JSON.stringify(usuario));
    }, [usuario]);

   
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