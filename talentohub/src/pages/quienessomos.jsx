import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import CarrucelPaginas from "../componentes/carrucelpaginas";




const Quienessomos = () => {
  return (
    <>
    <Navbar />
    <div className="main-content">
       <CarrucelPaginas
       imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697593306/wepik-export-20231018013842JNF9_iznqn5.png"/>
      </div>
      <Footer />
    </>
  )
}

export default Quienessomos