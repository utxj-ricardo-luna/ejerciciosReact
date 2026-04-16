import { useEffect, useState } from "react";
import api from "./Services/api";
import './Productos.css';
import RegistrarProductos from "./RegistrarProductos";

function Productos() {
    //https://fakestoreapi.com/docs npm install axios

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    
    const obtenerProductos = async () => {
      try {
        const response = await api.get("/api/productos");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      obtenerProductos();
    }, []);

  if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <RegistrarProductos
              productoEditando={productoSeleccionado} 
              limpiarSeleccion={() => setProductoSeleccionado(null)}
              onActualizacionExitosa={obtenerProductos}
              />
            <main className='classMain'>
                <header>
                    <h1>Nuestro Catálogo Tecnológico</h1>
                </header>
                <section className='classSection'>
                    {productos.map((producto) => (
                        <article key={producto.id} className='classArticle'>
                            <img
                                src={producto.nombre}
                                alt={producto.nombre}
                            />
                            <span>
                                {producto.descrpcion}
                            </span>
                            <h2>{producto.categoria}</h2>
                            <p>
                                {producto.precio}
                            </p>
                            <button onClick={createCart}> Añadir al carrito</button>
                            <button className="btnEditar" onClick={() => setProductoSeleccionado(producto)}>Editar</button>
                            <button onClick={() => removerProducto(producto.id)} className="btnEliminar">
                                Eliminar
                            </button>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}
const createCart = async () => {
  try {

    const cartData = {
      userId: 3,
      products: [
        {
          productId: 10,
          quantity: 2
        }
      ]
    };

      const response = await api.post("/carts",
      cartData
    );

    console.log("Carrito creado:", response.data);
    alert('¡Producto agregado al carrito con éxito!');

  } catch (error) {
    console.error("Error al crear carrito:", error.response?.data || error.message);
  }
};
const removerProducto = async (productoId) => {

  try {

    const response = await api.delete(
      `/products/${productoId}`
    );

    console.log(response.data);
    alert('¡Producto eliminado con éxito!');

  } catch (error) {
    console.error(error);
  }

};
export default Productos