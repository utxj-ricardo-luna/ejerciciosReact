import { useEffect, useState } from "react";
import api from "./Services/api";
import './Usuarios.css';
import RegistrarUsuarios from "./RegistrarUsuarios";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

    const obtenerUsuarios = async () => {
      try {
        const response = await api.get("/api/usuarios");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        obtenerUsuarios();
    }, []);

  if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <RegistrarUsuarios
              usuarioEditando={usuarioSeleccionado} 
              limpiarSeleccion={() => setUsuarioSeleccionado(null)}
              onActualizacionExitosa={obtenerUsuarios}
            />
            <main className='classMain'>
                <header>
                    <h1>Usuarios Registrados</h1>
                </header>
                <section className='classSection'>
                    <table className="tabla-productos">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Dirección</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Password</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.direccion}</td>
                                <td>{usuario.telefono}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.password}</td>
                                <td><button className="btn-editar" onClick={() => setUsuarioSeleccionado(usuario)}>Editar</button></td>
                                <td><button className="btn-eliminar" onClick={() => removeUsuario(usuario.id)}>Eliminar</button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>                  
                </section>
            </main>
        </div>
    )
}
const removeUsuario = async (usuarioId) => {
 if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;
  try {

    const response = await api.delete(
      `/users/${usuarioId}`
    );

    console.log(response.data);
    alert('¡Usuario eliminado con éxito!');

  } catch (error) {
    console.error(error);
  }
};

export default Usuarios