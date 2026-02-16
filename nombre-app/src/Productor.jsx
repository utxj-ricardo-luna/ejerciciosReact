import { useEffect, useState } from "react";
import api from "./Services/api";
import './Productos.css';

function Productos() {
    //https://fakestoreapi.com/docs npm install axios

    const products = [
        { id: 1, name: "Neural Link Pro", price: "$299", category: "Hardware", img: "https://global.gbm.com/prd/media/wp-content/uploads/Neuralink-1.png" },
        { id: 2, name: "DeepCore API", price: "$49/mes", category: "Software", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6Of21_z3-hgB2lqKkZRMyBp9MAvbufgM-w&s" },
        { id: 3, name: "Quantum Processor", price: "$899", category: "Componentes", img: "https://www.positive.news/wp-content/uploads/2025/02/Majorana-1-009-4000px-1-min-1800x0-c-center.jpg" },
        { id: 4, name: "Cyber Shield VPN", price: "$12/mes", category: "Seguridad", img: "https://70de7f7aebd3800834748463c9160070.cdn.bubble.io/cdn-cgi/image/w=,h=,f=auto,dpr=1,fit=contain/f1756955166961x489688747831440500/VPNCS-logo%20-%20Edited.png" },
        { id: 5, name: "Vision AI Cam", price: "$150", category: "Hardware", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCCaU3IThOnR7pOYoLVszkY6RoLyNPgD7Pg&s" },
        { id: 6, name: "DataFlow Suite", price: "$199", category: "SaaS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_pxsUsa_CjpOF6sTwRJ8Z-t1l3L_Xy7YJg&s" },
        { id: 7, name: "Bot Assistant X", price: "$30/mes", category: "IA", img: "https://i.ytimg.com/vi/Xbo9ofFXoQc/maxresdefault.jpg" },
        { id: 8, name: "Titan Server Rack", price: "$2,500", category: "Infraestructura", img: "https://media.wavescdn.com/images/products/hardware/share/titan-r-soundgrid-server.jpg" },
    ];

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await api.get("/products");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <main className='classMain'>
                <header>
                    <h1>Nuestro Catálogo Tecnológico</h1>
                </header>
                <div className="divProducto">
                <h2>Lista de Usuarios</h2>
                    {productos.map((producto) => (
                        <p key={producto.id}>
                            <p>{producto.title}</p>
                            <p>{producto.price}</p>
                            <img src={producto.image}/>
                            <p>{producto.description}</p>
                        </p>
                    ))}
                </div>
                <section className='classSection'>
                    {products.map((product) => (
                        <article key={product.id} className='classArticle'>
                            <img
                                src={product.img}
                                alt={product.name}
                            />
                            <span>
                                {product.category}
                            </span>
                            <h2>{product.name}</h2>
                            <p>
                                {product.price}
                            </p>
                            <button>
                                Añadir al carrito
                            </button>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Productos