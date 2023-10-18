import CarrucelPaginas from "../componentes/carrucelpaginas";
import CarruselContactanos from "../componentes/carruselContactanos";
import Footer from "../componentes/footer";
import Navbar from "../componentes/navbar";

const Contacto = () => {
  return (
    <>
      <Navbar />
    <CarrucelPaginas
    imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697417408/wepik-export-20231016004919RTME_fyaunf.png"}/>
    <CarruselContactanos/>
      <Footer />
    </>
  );
};

export default Contacto;
