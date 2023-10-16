import Navbar from "../componentes/navbar";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import CarruselContactanos from "../componentes/carruselContactanos";
import CardLargas from "../componentes/cardlargas";
import Footer from "../componentes/footer";

const crecimientodemarca = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {/* <Carrusel /> */}
        <Promociones />
        <h1 className="tituloweb">Crecimiento de marca</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <Cardconbotones
              imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Internet_on_the_go-amico_ctkuim.png"}
              titulo={"Plan Basico"}
              informacion={[
                "• Creación y desarrollo de la identidad visual de la marca ",
                "• Desarrollo de una estrategia básica de marketing digital ",
                "• Creación de contenido relevante y atractivo para la marca ",
                "• Establecimiento de presencia en redes sociales ",
                "• Análisis básico de la competencia ",
                // Puedes agregar más información si es necesario
              ]}
              
              botoninfo={"¡Voy!"}
              referencia={"redessociales"}
            />
            </div>
            <div className="col-6">
            <Cardconbotones
              imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Next_option-rafiki_wkmcjg.png"}
              titulo={"Plan Premium"}
              informacion={[
                "• Desarrollo completo de la identidad visual, tono de marca y mensaje ",
                "• Desarrollo e implementación de una estrategia completa de marketing digital ",
                "• Creación de contenido creativo y altamente atractivo para la marca ",
                "• Gestión avanzada y potenciada de la presencia en redes sociales ",
                "• Análisis profundo de la competencia y del mercado ",
                "• Desarrollo de campañas especiales para eventos clave ",
                // Puedes agregar más información si es necesario
              ]}
              
              botoninfo={"¡Voy!"}
              referencia={"redessociales"}
            />
            </div>
          
          </div>
        </div>
        
      </div>
      <div className="container">
  <div className="row">
    <div className="col-12 mb-4">
    <CardLargas
  imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697424338/wepik-export-20231016023605UXSO_tpiknh.png "
  texto1={"texto bla bla bla"}/>

      
     
    </div>
    <div className="col-12 mb-4">
    <CardLargas
      imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697424338/wepik-export-20231016024008eRPH_mu2ha9.png "}
      texto1={"texto bla bla bla"}/>
   
    </div>
    <div className="col-12 mb-4">
    <CardLargas
      imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697424338/wepik-export-2023101602424416u2_vwxs6q.png "}
      texto1={"texto bla bla bla"}/>
   
    </div>
  </div>
</div>
<CarruselContactanos />
      <Footer />
    </>
  );
};

export default crecimientodemarca
