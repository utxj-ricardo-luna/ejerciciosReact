import './Contacto.css';

function Contacto() {
    return (
        <div className="form-container">
            <form className="contact-form">
                <label>
                    Nombre:
                    <input type="text" name="nombre" placeholder="Tu nombre..." />
                </label>
                <label>
                    Direccion:
                    <input type="text" name="direccion" placeholder="Tu dirección..." />
                </label>
                <label>
                    Telefono:
                    <input type="text" name="telefono" placeholder="Tu telefono..." />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" placeholder="ejemplo@correo.com" />
                </label>

                <label>
                    Mensaje:
                    <textarea name="mensaje" rows="4" placeholder="Escribe aquí..."></textarea>
                </label>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Contacto