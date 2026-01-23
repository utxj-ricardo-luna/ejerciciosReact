import miImagen from './assets/logo.png';
function Encabezado(){
    return (
        <div>
            <Logotipo />
            <Menu />
            <Redes />
        </div>
    )
}

function Logotipo(){
    return (
        <div>
            <img src={miImagen} alt='Logotipo'/>
        </div>
    )
}

function Menu(){
    return (
        <div>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}

function Redes(){
    return (
        <div>
            <ul>
                <li>Facebook</li>
                <li>Whatsapp</li>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Linkedin</li>
            </ul>
        </div>
    )
}

export default Encabezado