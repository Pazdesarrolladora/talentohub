import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";





const Quienessomos = () => {
  return (
    <>
    <Navbar />
    <div className="main-content">
       <CarrucelPaginas
       imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697645713/wepik-export-20231018160745yGpU_nq2vsq.png"/>
      </div>
     
      <Footer />
    </>
  )
}

export default Quienessomos