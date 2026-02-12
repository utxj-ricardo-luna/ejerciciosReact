import './Sucursales.css'
import Mapa from './Mapa'
function Sucursales() {
    const sedes = [
        { id: 1, ciudad: "CDMX", direccion: "Av. Reforma 222, Juárez", tel: "+52 55 1234 5678", mapa: "https://maps.google.com", lat:19.414420160377635, lng:-99.12694482737395 },
        { id: 2, ciudad: "Monterrey", direccion: "San Pedro Garza García, NL", tel: "+52 81 8765 4321", mapa: "https://maps.google.com", lat:25.701544876914575, lng:-100.33592483147693 },
        { id: 3, ciudad: "Guadalajara", direccion: "Colonia Americana, Jal", tel: "+52 33 4455 6677", mapa: "https://maps.google.com",lat:20.679695050203655, lng:-103.33917712330407 },
        { id: 4, ciudad: "Madrid", direccion: "Paseo de la Castellana, 100", tel: "+34 912 345 678", mapa: "https://maps.google.com",lat: 40.44423398784751, lng:-3.644926333109146 }
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
                            nombre={sede.ciudad}/> 
                        <a
                            href={sede.mapa}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            
                            Ver en Google Maps →
                        </a>
                       
                    </address>
                ))}
            
            </div>
        </div>
    )
}
export default Sucursales