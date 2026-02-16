import Clima from './Clima'
import MapaGeolocalizacion from './MapaGeolocalizacion'
import './Promociones.css'
function Promociones(props){
    let user  = props
    console.info(user)
    if (user.name!="") {
        
     return (
        <div className="promosDiv">
            <h3>Seccion de promociones</h3>
            <p>En esta seccion se da a conocer la información correspondiete a promociones del sitio, informacion de contratacion, contacto, producto estrella y mucho mas</p>
        <MapaGeolocalizacion/>
        <Clima/>
        </div>
        
    )
    }
    return (
        <div><h3>No hay datos</h3></div>
    )

}
export default Promociones