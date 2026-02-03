import ContenedorCards from "./ContenedorCards"
import Encabezado from "./Encabezado"
import Footer from "./Footer"
import Promociones from "./Promociones"
function App(){
  return (
    <div>
      <Encabezado />
      <ContenedorCards />
      <Promociones name = ""/>
      <Footer />
    </div>
  )
}

export default App