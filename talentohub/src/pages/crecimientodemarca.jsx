import Navbar from "../componentes/navbar";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import CardLargas from "../componentes/cardlargas";
import Footer from "../componentes/footer";

const crecimientodemarca = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://res.cloudinary.com/dcwloh062/image/upload/v1697464056/wepik-export-20231016134502Y89B_qbswhu.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
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
        <div className="row">
            <div className="col-12 mb-4">
              <CardLargas
                imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697458202/wepik-export-20231016115840HNzB_ub8prt.png"
                texto1={
                  "En la fase de diseño y desarrollo, nuestros creativos toman la iniciativa para dar vida al proyecto, fusionando la creatividad con la funcionalidad. Nos esforzamos por superar tus expectativas, personalizando cada aspecto según tus requisitos para asegurar un producto verdaderamente único"
                }
              />
            </div>
            <div className="col-12 mb-4">
              <CardLargas
                imagen={
                  "https://res.cloudinary.com/dcwloh062/image/upload/v1697458202/wepik-export-20231016120822H2bc_subkpz.png"
                }
                texto1={
                  "Nuestro equipo altamente cualificado lleva a cabo la implementación del proyecto, ajustándose a la planificación estratégica inicial. Cada detalle se perfecciona cuidadosamente para garantizar que el resultado final cumpla con tus expectativas y necesidades específicas."
                }
              />
            </div>
            <div className="col-12 mb-4">
              <CardLargas
                imagen={
                  "https://res.cloudinary.com/dcwloh062/image/upload/v1697458207/wepik-export-202310161149598ypy_hgk9ku.png"
                }
                texto1={
                  "En el corazón de nuestro compromiso está la entrega de un proyecto completamente funcional. Los desarrolladores de TalentoHuB se aseguran de que cada aspecto del proyecto esté operativo, respaldado por evaluaciones previas exhaustivas para garantizar su correcto funcionamiento y tu satisfacción total"
                }
              />
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default crecimientodemarca
