import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from "./Services/api";
import './RegistrarUsuarios.css';

function RegistrarUsuarios({ usuarioEditando, limpiarSeleccion, onActualizacionExitosa }) {
    const [username, setUsername] = useState('');
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (usuarioEditando) {
            setUsername(usuarioEditando.username);
            setMail(usuarioEditando.email);
            setPassword(''); // Normalmente la contraseña no se carga por seguridad
        } else {
            resetForm();
        }
    }, [usuarioEditando]);

    const resetForm = () => {
        setUsername('');
        setMail('');
        setPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        const nuevoUsuario = { username, email, password };
        try {
            if (usuarioEditando) {
                // LÓGICA DE ACTUALIZAR (PUT)
                const respuesta = await api.put(`/users/${usuarioEditando.id}`, nuevoUsuario);
                console.log('Usuario actualizado:', respuesta.data);
                alert('¡Usuario actualizado con éxito!');
                limpiarSeleccion(); // Limpia el estado en el padre
            } else {
                const respuesta = await api.post('/users', nuevoUsuario);
                console.log('Usuario registrado:', respuesta.data);
                alert('¡Usuario guardado con éxito!');
            }
            
            resetForm();
            if (onActualizacionExitosa) onActualizacionExitosa(); // Refresca la lista en el padre
        } catch (error) {
            console.error('Error al registrar:', error);
            alert('¡Error al procesar la solicitud!');
        }
    }
        return (
            <div className='form-container'>
                
                <form onSubmit={handleSubmit} className='contact-form '>
                    <h2>Registrar Usuario</h2>
                    <input
                        type="text"
                        placeholder="Nombre de Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={(e) => setMail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button type="submit">Guardar</button>
                </form>
            </div>
        )
}
export default RegistrarUsuarios
