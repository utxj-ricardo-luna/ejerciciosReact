import { useState } from "react";
import ContenedorTragetas from "./ContenedorTarjetas"
import Encabezado from "./Encabezado"
import PieComponente from "./PieComponente"
import PromosContenedor from "./PromosContenedor"

function App(){
  const [vista, setVista] = useState("inicio");
  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <ContenedorTragetas vista={vista}/>
      <PromosContenedor/>
      <PieComponente/>
    </div>
  )
}

export default App