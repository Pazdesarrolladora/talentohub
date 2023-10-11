import '../css/App.css'
import Navbar from '../componentes/navbar'
import Carrusel from '../componentes/carrusel'
import Promociones from '../componentes/promociones'



const Inicio = () => {
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

export default Inicio