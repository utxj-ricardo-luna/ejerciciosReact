import miImagen from './assets/logo.png';
<<<<<<< HEAD
import facebook from './assets/iconos/facobook.png';
import gmail from './assets/iconos/gmail.png';
import instagram from './assets/iconos/instagram.png';
import linkedin from './assets/iconos/linkedin.png';
import whatsapp from './assets/iconos/whatsapp.png';
import youtube from './assets/iconos/youtube.png';
import './Encabezado.css'
function Encabezado(){
=======
import facebook from './assets/iconos/facebook.png';
import instagram from './assets/iconos/instagram.png';
import x from './assets/iconos/x.png';
import youtube from './assets/iconos/youtube.png';
import linkedin from './assets/iconos/linkedin.png';
import './Encabezado.css'
import PropTypes from 'prop-types';

function Encabezado({cambiarVista}){
>>>>>>> b1942b8cbe996d3b8c4a7e8c3a5acafa66a5be8f
    return (
        <div className='encabezadoDiv'>
            <Logotipo />
            <Menu cambiarVista={cambiarVista}/>
            <Redes />
        </div>
    )
}

function Logotipo(){
    return (
        <div className='logoDiv'>
            <img src={miImagen} alt='Logotipo'/>
        </div>
    )
}

function Menu({cambiarVista}){
    return (
        <div className='menuDiv'>
            <ul>
<<<<<<< HEAD
                <li><a href='#'>Inicio </a></li>
                <li><a href='#'>Acerca de </a></li>
                <li><a href='#'>Productos </a></li>
                <li><a href='#'>Galeria</a></li>
                <li><a href='#'>Videos</a></li>
                <li><a href='#'>Contacto </a></li>
                <li><a href='#'>Sucursales </a></li>
=======
                <li onClick={() => cambiarVista("inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("acercade")}>Acerca de</li>
                <li onClick={() => cambiarVista("productos")}>Productos</li>
                <li onClick={() => cambiarVista("galeria")}>Galeria</li>
                <li onClick={() => cambiarVista("sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("contacto")}>Contacto</li>
>>>>>>> b1942b8cbe996d3b8c4a7e8c3a5acafa66a5be8f
            </ul>
        </div>
    )
}

function Redes(){
    return (
        <div className='redesDiv'>
            <ul>
<<<<<<< HEAD
                <li><img src={facebook} alt='Facebook'/></li>
                <li><img src={gmail} alt='Gmail'/></li>
                <li><img src={instagram} alt='Instagram'/></li>
                <li><img src={linkedin} alt='Linkedin'/></li>
                <li><img src={whatsapp} alt='WhatsApp'/></li>
                <li><img src={youtube} alt='Youtube'/></li>
=======
                <li><a href=''><img src={facebook} alt='Logotipo'/></a></li>
                <li><a href=''><img src={instagram} alt='Logotipo'/></a></li>
                <li><a href=''><img src={x} alt='Logotipo'/></a></li>
                <li><a href=''><img src={youtube} alt='Logotipo'/></a></li>
                <li><a href=''><img src={linkedin} alt='Logotipo'/></a></li>
>>>>>>> b1942b8cbe996d3b8c4a7e8c3a5acafa66a5be8f
            </ul>
        </div>
    )
}
Menu.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

Encabezado.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};
export default Encabezado