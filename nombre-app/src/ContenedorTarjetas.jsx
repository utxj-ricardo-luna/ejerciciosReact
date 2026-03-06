import AcercaDe from './AcercaDe';
import './ContenedorTarjetas.css'
import PropTypes from 'prop-types';
import Productos from './Productos';
import Galeria from './Galeria';
import Sucursales from './Sucursales';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Carritos from './Carrito';
import Login from './Login';
import RegistrarUsuarios from './RegistrarUsuarios';

function ContenedorTragetas(props){
    const vistas={
        Inicio: <Inicio />,
        AcercaDe: <AcercaDe />,
        Usuarios: <Usuarios/>,
        RegistrarUsuarios: <RegistrarUsuarios/>,
        Productos: <Productos />,
        Carritos: <Carritos/>,
        Galeria: <Galeria />,
        Sucursales: <Sucursales />,
        Contacto: <Contacto />,
        Login: <Login chVista={props.chVista}/>
    }
    return (
        <div className='ContenedorDiv'>
            {vistas[props.vista] || <Inicio />}
        </div>
    )
}
function Inicio() {
  return (
    <>
      <TarjetaComponent titulo = "Innovación" descripcion = "Proceso de convertir ideas o conocimientos en productos, servicios o procesos nuevos o mejorados que son adoptados por el mercado" image = "https://blog.maestriasydiplomados.tec.mx/hubfs/Blog%20notas%20maestrias%20y%20diplomados/Innovaci%C3%B3n%20tecnol%C3%B3gica.jpg"/>
      <TarjetaComponent titulo = "Tecnología" descripcion = "Conjunto de conocimientos, habilidades y técnicas aplicadas de forma lógica para resolver problemas, satisfacer necesidades o transformar el entorno" image="https://media.licdn.com/dms/image/sync/v2/D4D27AQEV_sjl2mK6PQ/articleshare-shrink_800/articleshare-shrink_800/0/1718842321749?e=2147483647&v=beta&t=HRuy7ym-Twk1XiOvTX9lAEWd0PlI-sOiP4T0utYwzvw"/>
      <TarjetaComponent titulo = "Seguridad" descripcion = "Conjunto de medidas y técnicas utilizadas para proteger los datos contra el acceso, uso, divulgación o destrucción no autorizados" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUCJimdqTIA5hgrEvGdkKE32JGqykinAUkjw&s"/>
      <TarjetaComponent titulo = "Diseño" descripcion = " Acción de modificar o transformar elementos existentes para crear algo nuevo que genere valor." image="https://imgproxy.domestika.org/unsafe/w:1200/rs:fill/plain/src://blog-post-open-graph-covers/000/011/478/11478-original.png?1694080018"/>
    </>
  );
}

function TarjetaComponent(props){
    return(
        <div className='TarjetaDiv'>
            <img src={props.image} alt='Logotipo'/>
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p> 
            <a href='#'>Ver más</a>
        </div>
    )
}

ContenedorTragetas.propTypes = {
  vista: PropTypes.string.isRequired
};

export default ContenedorTragetas