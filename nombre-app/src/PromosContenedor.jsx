import Mapa from './Mapa'
import MapaGeolocalizacion from './MapaGeolocalizacion'
import './PromosContenedor.css'
function PromosContenedor(){
    return (
        <div className="PromoContenedor">
            <h2>Hola bienvenido a nuestro sitio</h2>
            <p>Ofertas en todos los productos</p>
            <Mapa
                lat={20.275292}
                lng={-97.959008}
                nombre={"Sucursal Centro"}/>
            <MapaGeolocalizacion/>
        </div>
    )
}

export default PromosContenedor