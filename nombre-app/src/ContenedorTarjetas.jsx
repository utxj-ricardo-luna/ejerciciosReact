import imagen from './assets/imagenes/picture.jpg'
import './ContenedorTarjetas.css'
import PropTypes from 'prop-types';

function ContenedorTragetas({vista}){
    const vistas={
        INICIO: <Inicio />,
        ACERCA: <AcercaDe />,
        PRODUCTOS: <Productos />,
        GALERIA: <Galeria />,
        SUCURSALES: <Sucursales />,
        CONTACTO: <Contacto />
    }
    return (
        <div className='ContenedorDiv'>
            {vistas[vista] || <Inicio />}
        </div>
    )
}
function Inicio() {
  return (
    <>
      <TarjetaComponent />
      <TarjetaComponent />
      <TarjetaComponent />
      <TarjetaComponent />
    </>
  );
}

function AcercaDe() {
  return <h2>Acerca de nosotros</h2>;
}

function Productos() {
  return <h2>Productos</h2>;
}

function Galeria() {
  return <h2>Galería</h2>;
}

function Sucursales() {
  return <h2>Sucursales</h2>;
}

function Contacto() {
  return <h2>Contacto</h2>;
}
function TarjetaComponent(){
    return(
        <div className='TarjetaDiv'>
            <img src={imagen} alt='Logotipo'/>
            <h3>Titulo prueba</h3>
            <p>Hola, esta es una targeta de prueba para utilizar en el componente como información de ejemplo presentada para todos </p>
            <a href='#'>Ver más</a>
        </div>
    )
}

ContenedorTragetas.propTypes = {
  vista: PropTypes.string.isRequired
};

export default ContenedorTragetas