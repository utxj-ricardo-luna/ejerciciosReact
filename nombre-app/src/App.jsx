import { useState } from "react";
import ContenedorTragetas from "./ContenedorTarjetas"
import Encabezado from "./Encabezado"
import PieComponente from "./PieComponente"
import PromosContenedor from "./PromosContenedor"
import { AuthProvider } from "./AuthContext";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
      <AuthProvider>
        <Encabezado cambiarVista={setVista} />
        <ContenedorTragetas vista={vista} chVista={setVista}/>
      </AuthProvider>
      <PromosContenedor />
      <PieComponente/>
    </div>
  )
}

export default App