import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import CarruselContactanos from "../componentes/carruselContactanos";



const Quienessomos = () => {
  return (
    <>
    <Navbar />
    <div className="main-content">
       <CarrucelPaginas
       imagen="https://res.cloudinary.com/dcwloh062/image/upload/bo_1px_solid_rgb:000,e_saturation:-15/v1697593306/wepik-export-20231018013842JNF9_iznqn5.png"/>
      </div>
     
      <Footer />
    </>
  )
}

export default Quienessomos