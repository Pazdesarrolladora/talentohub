import Navbar from "../componentes/navbar";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";

import Footer from "../componentes/footer";
import CardLargas from "../componentes/cardlargas";

const Paginasweb = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://res.cloudinary.com/dcwloh062/image/upload/v1697464057/wepik-export-202310161339459DKG_msufcr.png"
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
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 ">
            <Cardconbotones
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697082385/Website_Creator-rafiki_ksaky1.png"
              }
              titulo={"Presencia Online Basica"}
              informacion={[
                "• Creación de una página web atractiva y funcional ",
                "• Menú adaptable ",
                "• Información de la empresa o proyecto ",
                "• Formulario de contacto ",
                "• Vinculación con redes sociales ",
                "• Certificado SSL incluido ",
                "• Dominio gratis por 1 año ",
                "• ¡Lleva gratis el tutorial online para administrar tu Página Web! ",
              ]}
              botoninfo={"Hablemos por WhatsApp "}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
          </div>
          <div className="col-12 col-lg-4 ">
            <Cardconbotones
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697082385/Online_wishes_list-rafiki_vgclwr.png"
              }
              titulo={"Vende con estilo"}
              informacion={[
                "• Creación de una tienda online atractiva y profesional ",
                "• Carrito de compras ",
                "• Catálogo de productos con descripciones detalladas ",
                "• Proceso de pago seguro ",
                "• Gestión de inventario ",
                "• Integración con pasarelas de pago",
                "• Vinculación con redes sociales ",
                "• Certificado SSL incluido ",
                "• Dominio gratis por 1 año ",
                "• ¡Lleva gratis el tutorial online para administrar tu Página Web! ",

                // Agrega más información si es necesario
              ]}
              botoninfo={"WhatsApp"}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
          </div>
          
          <div className="col-12 col-lg-4">
            <Cardconbotones
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697082385/Rocket-rafiki_zdoec3.png"
              }
              titulo={"Potencia tu negocio"}
              informacion={[
                "• Creación de una página web completa con tienda online ",
                "• Todas las características del servicio de página web y e-commerce empresa",
                "• Proceso de pago seguro con múltiples opciones ",
                "• Integración con pasarelas de pago y redes sociales ",
                "• Estrategias de marketing para la tienda online ",
                "• Certificado SSL incluido ",
                "• Dominio gratis por 1 año .",
                "• ¡Lleva gratis el tutorial online para administrar tu Página Web! ",

                // Agrega más información si es necesario
              ]}
              botoninfo={"WhatsApp"}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
          </div>
        </div>
          <div className="row">
    <div className="col-12 mb-4">
    <CardLargas
  imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697458202/wepik-export-20231016115840HNzB_ub8prt.png"
  texto1={"En la fase de diseño y desarrollo, nuestros creativos toman la iniciativa para dar vida al proyecto, fusionando la creatividad con la funcionalidad. Nos esforzamos por superar tus expectativas, personalizando cada aspecto según tus requisitos para asegurar un producto verdaderamente único"}/>

      
     
    </div>
    <div className="col-12 mb-4">
    <CardLargas
      imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697458202/wepik-export-20231016120822H2bc_subkpz.png"}
      texto1={"Nuestro equipo altamente cualificado lleva a cabo la implementación del proyecto, ajustándose a la planificación estratégica inicial. Cada detalle se perfecciona cuidadosamente para garantizar que el resultado final cumpla con tus expectativas y necesidades específicas."}/>
   
    </div>
    <div className="col-12 mb-4">
    <CardLargas
      imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697458207/wepik-export-202310161149598ypy_hgk9ku.png"}
      texto1={"En el corazón de nuestro compromiso está la entrega de un proyecto completamente funcional. Los desarrolladores de TalentoHuB se aseguran de que cada aspecto del proyecto esté operativo, respaldado por evaluaciones previas exhaustivas para garantizar su correcto funcionamiento y tu satisfacción total"}/>
   
    </div>
  </div>
</div>

      
      <Footer />
    </>
  );
};

export default Paginasweb;
