import Mapa from './Mapa';
import './Sucursales.css'
function Sucursales() {
    const sedes = [
        { id: 1, ciudad: "CDMX", direccion: "Av. Reforma 222, Juárez", tel: "+52 55 1234 5678", mapa: "https://maps.google.com", lat: 19.438872567132496, lng: -99.15966103461886, nombre: "Sucursal CDMX" },
        { id: 2, ciudad: "Monterrey", direccion: "San Pedro Garza García, NL", tel: "+52 81 8765 4321", mapa: "https://maps.google.com", lat: 19.438872567132496, lng: -99.15966103461886, nombre: "Sucursal CDMX" },
        { id: 3, ciudad: "Guadalajara", direccion: "Colonia Americana, Jal", tel: "+52 33 4455 6677", mapa: "https://maps.google.com", lat: 19.438872567132496, lng: -99.15966103461886, nombre: "Sucursal CDMX" },
        { id: 4, ciudad: "Madrid", direccion: "Paseo de la Castellana, 100", tel: "+34 912 345 678", mapa: "https://maps.google.com", lat: 19.438872567132496, lng: -99.15966103461886, nombre: "Sucursal CDMX" }
    ];
    return (
        <div className="classSuc">
            <h2>Nuestras Sedes</h2>
            <div className="classSedes">
                {sedes.map((sede) => (
                    <address key={sede.id}>
                        <h3>{sede.ciudad}</h3>
                        <p>📍 {sede.direccion}</p>
                        <p>📞 <strong>{sede.tel}</strong></p>
                        <Mapa
                            lat={sede.lat}
                            lng={sede.lng}
                            nombre={sede.nombre} />                      
                    </address>
                ))}
            
            </div>
        </div>
    )
}
export default Sucursales