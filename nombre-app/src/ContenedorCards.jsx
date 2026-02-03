import './ContenedorCards.css'
import imagen from './assets/picture.png'

function ContenedorCards(){
    return (
        <div className="ContenedorCardsDiv">
            <Tarjeta name ='Eutiquio' descripcion ='Estudiante de TI, conocido como el implacable' saludarfunc = {Saludar}/>
            <Tarjeta name = 'Mario' descripcion ='El mejor elemento de su team y siempre llega tarde ' saludarfunc = {Saludar}/>
            <Tarjeta name = 'Alfonso' descripcion ='Joven de sonrriza coqueta, apacionado por las TI' saludarfunc = {Saludar}/>
            <Tarjeta name = 'Isabela' descripcion ='Pequeña de mirada triste, sonrisa y de gran corazon' saludarfunc = {Saludar}/>
        </div>
    )
}

function Tarjeta(props){
    return (
        <div className="CardDiv">
             <img src={imagen} alt='Imagen'/>
            <h3>{props.name}</h3>
            <p>{props.descripcion}</p>
            <a href="#">Leer mas</a>
            <p>{props.saludarfunc()}</p>
        </div>
    )
}

function Saludar(){
    return (
        <div>
            <h2>Hola terricolas</h2>
        </div>
    )
}
export default ContenedorCards