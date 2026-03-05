import React, { useState, useEffect} from 'react';
import axios from 'axios';
import api from "./Services/api";
import './RegistrarProductos.css';

function RegistrarProductos({productoEditando, limpiarSeleccion, onActualizacionExitosa}) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
            if (productoEditando) {
                setTitle(productoEditando.title);
                setPrice(productoEditando.price);
                setDescription(productoEditando.description);
                setCategory(productoEditando.category);
                setImage(productoEditando.image);

            } else {
                resetForm();
            }
        }, [productoEditando]);

    const resetForm = () => {
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        setImage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
        const nuevoProducto = { title, price, description, category, image };
        try {
            if(productoEditando){
                const respuesta = await api.put(`/products/${productoEditando.id}`, nuevoProducto);
                console.log('Producto actualizado:', respuesta.data);
                alert('¡Producto actualizado con éxito!');
                limpiarSeleccion();
            }else{
                const respuesta = await api.post('/products', nuevoProducto);
                console.log('Producto registrado:', respuesta.data);
                alert('¡Producto guardado con éxito!');
            }
            resetForm();
            if(onActualizacionExitosa)onActualizacionExitosa();
            
        } catch (error) {
            console.error('Error al registrar:', error);
            alert('¡Error al procesar solicitud!');
        }
    }
        return (
            <div className='form-container'>
                
                <form onSubmit={handleSubmit} className='contact-form '>
                    <h2>Registrar Producto</h2>
                    <input
                        type="text"
                        placeholder="Titulo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Precio"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Descripción"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Imagen"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <button type="submit">Guardar</button>
                </form>
            </div>
        )
}
export default RegistrarProductos
