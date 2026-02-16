import Clima from './Clima'
import MapaGeolocalizacion from './MapaGeolocalizacion'
import './PromosContenedor.css'
function PromosContenedor() {
    return (
        <div className="PromoContenedor">
            <h2>Hola bienvenido a nuestro sitio</h2>
            <p>Ofertas en todos los productos</p>
            <MapaGeolocalizacion/>
            <Clima/>
        </div>
    )
}

export default PromosContenedor