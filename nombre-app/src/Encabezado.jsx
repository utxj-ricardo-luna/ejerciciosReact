import miImagen from './assets/logo.png';
import facebook from './assets/iconos/facebook.png';
import instagram from './assets/iconos/instagram.png';
import x from './assets/iconos/x.png';
import youtube from './assets/iconos/youtube.png';
import linkedin from './assets/iconos/linkedin.png';
import './Encabezado.css'
import PropTypes from 'prop-types';

function Encabezado({cambiarVista}){
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
                <li onClick={() => cambiarVista("inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("acercade")}>Acerca de</li>
                <li onClick={() => cambiarVista("productos")}>Productos</li>
                <li onClick={() => cambiarVista("galeria")}>Galeria</li>
                <li onClick={() => cambiarVista("sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("contacto")}>Contacto</li>
            </ul>
        </div>
    )
}

function Redes(){
    return (
        <div className='redesDiv'>
            <ul>
                <li><a href=''><img src={facebook} alt='Logotipo'/></a></li>
                <li><a href=''><img src={instagram} alt='Logotipo'/></a></li>
                <li><a href=''><img src={x} alt='Logotipo'/></a></li>
                <li><a href=''><img src={youtube} alt='Logotipo'/></a></li>
                <li><a href=''><img src={linkedin} alt='Logotipo'/></a></li>
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