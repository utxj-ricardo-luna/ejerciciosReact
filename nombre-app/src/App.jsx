<<<<<<< HEAD
import ContenedorCards from "./ContenedorCards"
import Encabezado from "./Encabezado"
import Footer from "./Footer"
import Promociones from "./Promociones"
=======
import { useState } from "react";
import ContenedorTragetas from "./ContenedorTarjetas"
import Encabezado from "./Encabezado"
import PieComponente from "./PieComponente"
import PromosContenedor from "./PromosContenedor"

>>>>>>> b1942b8cbe996d3b8c4a7e8c3a5acafa66a5be8f
function App(){
  const [vista, setVista] = useState("inicio");
  return (
    <div>
<<<<<<< HEAD
      <Encabezado />
      <ContenedorCards />
      <Promociones name = ""/>
      <Footer />
=======
      <Encabezado cambiarVista={setVista} />
      <ContenedorTragetas vista={vista}/>
      <PromosContenedor/>
      <PieComponente/>
>>>>>>> b1942b8cbe996d3b8c4a7e8c3a5acafa66a5be8f
    </div>
  )
}

export default App