import Navbar from "../componentes/navbar";
import Carrusel from "../componentes/carrusel";
import CarruselContactanos from "../componentes/carruselContactanos";
import Cardconbotones from "../componentes/cardconbotones";

import Footer from "../componentes/footer";
import CardLargas from "../componentes/cardlargas";

const Publicidad = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Carrusel />
        
        <h1 className="tituloweb">Publicidad</h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Cardconbotones
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/brand_loyalty-pana_tlithf.png"}
                titulo={"Plan Basico"}
                informacion={[
                  "• Investigación básica de palabras clave para la industria",
                  "• Creación y gestión de una campaña en una plataforma de publicidad (Google Ads o Facebook Ads)",
                  "• Análisis de Resultados: Informe mensual de rendimiento",
                  // Agrega más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Holding_the_arrow-rafiki_kmsmef.png"}
                titulo={"Plan Estandar"}
                informacion={[
                  "• Investigación avanzada de palabras clave y análisis de competencia",
                  "• Creación y gestión de dos campañas en plataformas de publicidad seleccionadas",
                  "• Diseño de anuncios creativos y segmentación de audiencia",
                  "• Informe quincenal de rendimiento y ajuste de estrategias según los resultados",
                  // Puedes agregar más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Success_factors-amico_zfmein.png"}
                titulo={"Plan Premium"}
                informacion={[
                  "• Investigación exhaustiva de palabras clave y análisis detallado de la competencia ",
                  "• Creación y gestión de tres campañas en varias plataformas de publicidad ",
                  "• Diseño de anuncios altamente creativos y personalizados ",
                  "• Implementación de estrategias de retargeting y ajuste constante de la campaña ",
                  "• Informe semanal de rendimiento con reuniones de consultoría para discutir estrategias futuras ",
                  // Puedes agregar más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
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

export default Publicidad;
