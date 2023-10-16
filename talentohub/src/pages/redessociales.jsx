import Navbar from "../componentes/navbar";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Cardinfo from "../componentes/cardinfo";
import Footer from "../componentes/footer";
import CardLargas from "../componentes/cardlargas";
import CarruselContactanos from "../componentes/carruselContactanos";

const Redessociales = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {/* <Carrusel /> */}
        <Promociones />
        <h1 className="tituloweb">Redes Sociales </h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Cardconbotones
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404365/Online_world-bro_okywew.png"}
                titulo={"Plan Basico"}
                informacion={[
                  "• Creación y optimización de perfiles en las principales redes sociales ",
                  "• Desarrollo de una estrategia de contenido inicial ",
                  "• Publicación regular y programada en las redes sociales ",
                  "• Interacción básica con seguidores ",
                  "• Informe mensual de rendimiento ",
                  // Puedes agregar más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"redessociales"}
              />
            </div>
            <div className="col-6">
              <Cardconbotones
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Social_Growth-cuate_odloga.png"}
                titulo={"Plan Premium"}
                informacion={[
                  "• Creación y optimización de perfiles en las principales redes sociales ",
                  "• Desarrollo y ejecución de una estrategia de contenido avanzada ",
                  "• Publicación regular y estratégica para maximizar el alcance ",
                  "• Interacción activa con seguidores, gestión de comentarios y mensajes directos ",
                  "• Gestión de anuncios en redes sociales ",
                  "• Informe detallado de rendimiento con recomendaciones para la mejora continua ",
                  // Puedes agregar más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"redessociales"}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Cardinfo
                imagen={
                  "https://i.pinimg.com/736x/93/29/00/9329004761a79d36f5171aa0308125f1.jpg"
                }
                titulo={"Proceso"}
                informacion={
                  "Inicia seleccionando tu promoción preferida y recibirás un formulario para reservar tu proyecto. En  dos semanas, tendrás tu proyecto listo para afinar detalles. Te proporcionamos el proyecto activo con fotografías, y como autoadministrador, puedes cargar imágenes ilimitadas."
                }
              />
            </div>
            <div className="col-6">
              <Cardinfo
                imagen={
                  "https://i.pinimg.com/564x/2c/2e/e0/2c2ee05faeeaa92532d532f565c8a697.jpg"
                }
                titulo={"Renovacion"}
                informacion={
                  "Durante el primer año, disfruta de dominio y alojamiento web gratuitos. A partir del segundo año, la renovación anual se realiza por 1 UTM, asegurando continuidad y estabilidad para tu servicio."
                }
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

export default Redessociales;
