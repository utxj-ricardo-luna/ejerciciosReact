import miImagen from './assets/logo.png';
import facebook from './assets/iconos/facobook.png';
import gmail from './assets/iconos/gmail.png';
import instagram from './assets/iconos/instagram.png';
import linkedin from './assets/iconos/linkedin.png';
import whatsapp from './assets/iconos/whatsapp.png';
import youtube from './assets/iconos/youtube.png';
import './Encabezado.css'
function Encabezado(){
    return (
        <div className='encabezadoDiv'>
            <Logotipo />
            <Menu />
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

function Menu(){
    return (
        <div className='menuDiv'>
            <ul>
                <li><a href='#'>Inicio </a></li>
                <li><a href='#'>Acerca de </a></li>
                <li><a href='#'>Productos </a></li>
                <li><a href='#'>Galeria</a></li>
                <li><a href='#'>Videos</a></li>
                <li><a href='#'>Contacto </a></li>
                <li><a href='#'>Sucursales </a></li>
            </ul>
        </div>
    )
}

function Redes(){
    return (
        <div className='redesDiv'>
            <ul>
                <li><img src={facebook} alt='Facebook'/></li>
                <li><img src={gmail} alt='Gmail'/></li>
                <li><img src={instagram} alt='Instagram'/></li>
                <li><img src={linkedin} alt='Linkedin'/></li>
                <li><img src={whatsapp} alt='WhatsApp'/></li>
                <li><img src={youtube} alt='Youtube'/></li>
            </ul>
        </div>
    )
}

export default Encabezado