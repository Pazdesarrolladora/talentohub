import './css/app.css'
import Navbar from './componentes/navbar'
import Carrusel from './componentes/carrusel'
import Promociones from './componentes/promociones'

function App() {


  return (
    <>
    <Navbar/>
    <div className="main-content">
    <Carrusel/>
    <Promociones/>
    </div>
  
    </>
  )
}

export default App
