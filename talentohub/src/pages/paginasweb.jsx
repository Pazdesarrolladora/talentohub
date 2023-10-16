import Navbar from "../componentes/navbar";

import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import CarruselContactanos from "../componentes/carruselContactanos";
import Footer from "../componentes/footer";
import CardLargas from "../componentes/cardlargas";

const Paginasweb = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
       
        <h1 className="tituloweb">Planes de E-commerce y Desarrollo Web</h1>
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
                "Creación de una página web atractiva y funcional 🎨.",
                "Menú adaptable 📋",
                "Información de la empresa o proyecto ℹ️",
                "Formulario de contacto ✉️",
                "Vinculación con redes sociales 🔗",
                "Certificado SSL incluido 🔒",
                "Dominio gratis por 1 año 🆓",
                "¡Lleva gratis el tutorial online para administrar tu Página Web! ✅",
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
                "Creación de una tienda online atractiva y profesional 🎨",
                "Carrito de compras 🛍️",
                "Catálogo de productos con descripciones detalladas 📦",
                "Proceso de pago seguro 💳",
                "Gestión de inventario 📊",
                "Integración con pasarelas de pago 💸",
                "Vinculación con redes sociales 🔗",
                "Certificado SSL incluido 🔒",
                "Dominio gratis por 1 año 🆓",
                "¡Lleva gratis el tutorial online para administrar tu Página Web! ✅",

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
                "Creación de una página web completa con tienda online 🌐",
                "Todas las características del servicio de página web y e-commerce empresa",
                "Proceso de pago seguro con múltiples opciones 💳",
                "Integración con pasarelas de pago y redes sociales 💸🔗",
                "Estrategias de marketing para la tienda online 📈",
                "Certificado SSL incluido 🔒",
                "Dominio gratis por 1 año 🆓.",
                "¡Lleva gratis el tutorial online para administrar tu Página Web! ✅",

                // Agrega más información si es necesario
              ]}
              botoninfo={"WhatsApp"}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
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

      </div>
      <CarruselContactanos />
      <Footer />
    </>
  );
};

export default Paginasweb;
