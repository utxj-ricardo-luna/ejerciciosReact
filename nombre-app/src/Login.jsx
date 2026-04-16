import React, { useState } from 'react';
import api from "./Services/api";
import './Login.css'
import { useAuth } from './AuthContext';

const Login = ({chVista}) => {
  const { login } = useAuth();

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  const credenciales = { email, password };
  try {
      const respuesta = await api.post('/api/login/', credenciales);
    if ( respuesta.data.token) {
      login( respuesta.data.token); // Guardamos el token en el contexto
      // Redirigir al usuario aquí
      alert('Autenticacion autorizada');
      chVista("Usuarios"); 
    } else {
      alert('Credenciales inválidas');
    }
  } catch (error) {
    alert('Error', error);
    console.error("Error:", error);
  } 
};
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Correo electrónico</label>
            <input 
              type="text" 
              placeholder="ejemplo@correo.com"
              value={email} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
          <br></br><br></br><hr></hr><br></br>
          <a href="#" onClick={() => chVista("RegistrarUsuarios")} className='crearCuenta'> * Crear nueva cuenta</a>
          <br></br>
          <a href="#" className='recuperaCuenta'> * Recuperar contraseña</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
