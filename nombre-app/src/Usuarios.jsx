import { useEffect, useState } from "react";
import api from "./Services/api";
import './Usuarios.css';

function Usuarios() {
    //https://fakestoreapi.com/docs npm install axios

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await api.get("/users");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerUsuarios();
  }, []);

  if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <main className='classMain'>
                <header>
                    <h1>Usuarios Registrados</h1>
                </header>
                <section className='classSection'>
                    <table className="tabla-productos">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Dirección</th>
                                <th>Telefono</th>
                                <th>Correo</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.name.firstname}</td>
                                <td>{usuario.name.lastname}</td>
                                <td>{usuario.address.street} {usuario.address.number} {usuario.address.city} {usuario.address.zipcode}</td>
                                <td>{usuario.phone}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.password}</td>
                                <td><button className="btn-editar">Editar</button></td>
                                <td><button className="btn-eliminar">Eliminar</button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>                  
                </section>
            </main>
        </div>
    )
}

export default Usuarios