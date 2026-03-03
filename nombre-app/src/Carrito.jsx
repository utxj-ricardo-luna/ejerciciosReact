import { useEffect, useState } from "react";
import api from "./Services/api";
import './Carrito.css';

function Carritos() {
    //https://fakestoreapi.com/docs npm install axios

    const [carritos, setCarritos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const obtenerCarritos = async () => {
      try {
        const response = await api.get("/carts");
        setCarritos(response.data);
      } catch (error) {
        console.error("Error al obtener carrito:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerCarritos();
  }, []);

  if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <main className='classMain'>
                <header>
                    <h1>Carrito de compras</h1>
                </header>
                <section className='classSection'>
                    {carritos.map((carrito) => (
                        <article key={carrito.id} className='classArticle'>
                            <p>{carrito.userId}</p>
                            <h2>{carrito.date}</h2>
                             <h3>Productos</h3>
                                <ul>
                                    {/* Mapeo del arreglo interno de productos */}
                                    {carrito.products.map((item) => (
                                    <li key={item.productId}>
                                        Producto #{item.productId} — Cantidad: {item.quantity}
                                        <button className="btnEliminar" onClick={() => removerCarritoProducto(carrito.id, item.productId)}>
                                        X
                                        </button>
                                    </li>
                                    ))}
                                </ul>
                            <button>
                                Comprar
                            </button>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}
const removerCarritoProducto = async (carritoId,productoId) => {

  try {

    const response = await api.delete(
      `/carts/${carritoId}`
    );

    console.log(response.data);
    alert('¡Producto eliminado del carrito con éxito!');

  } catch (error) {
    console.error(error);
  }

};
export default Carritos