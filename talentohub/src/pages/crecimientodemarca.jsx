import Navbar from "../componentes/navbar";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Cardinfo from "../componentes/cardinfo";
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
              titulo={"Establece tu identidad"}
              informacion={[
                "Creación y desarrollo de la identidad visual de la marca 🎨.",
                "Desarrollo de una estrategia básica de marketing digital 📈.",
                "Creación de contenido relevante y atractivo para la marca 📸.",
                "Establecimiento de presencia en redes sociales 🔗.",
                "Análisis básico de la competencia 👥.",
                // Puedes agregar más información si es necesario
              ]}
              
              botoninfo={"¡Voy!"}
              referencia={"redessociales"}
            />
            </div>
            <div className="col-6">
            <Cardconbotones
              imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Next_option-rafiki_wkmcjg.png"}
              titulo={"Impulsa tu marca al otro nivel"}
              informacion={[
                "Desarrollo completo de la identidad visual, tono de marca y mensaje 🌐.",
                "Desarrollo e implementación de una estrategia completa de marketing digital 📈.",
                "Creación de contenido creativo y altamente atractivo para la marca 🚀.",
                "Gestión avanzada y potenciada de la presencia en redes sociales 🔗.",
                "Análisis profundo de la competencia y del mercado 👥🌐.",
                "Desarrollo de campañas especiales para eventos clave 🎉.",
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
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Cardinfo
                imagen={
                  "https://i.pinimg.com/564x/cf/a3/8b/cfa38b18b23a3887008bc117a6f29ac5.jpg"
                }
                titulo={"Informacion para Tiendas!"}
                informacion={
                  "Entregamos tu tienda con 10 productos/servicios y la capacidad de subir productos adicionales. Configuramos envíos por zona y te enseñamos a manejar pagos con débito o crédito directamente en tu cuenta bancaria."
                }
              />
            </div>
            <div className="col-6">
              <Cardinfo
                imagen={
                  "https://i.pinimg.com/564x/8b/b8/30/8bb830a8930c74bf6abdb04288ce5330.jpg"
                }
                titulo={"Otros detalles"}
                informacion={
                  "Nuestros planes incluyen dominio .com gratis. Puedes agregar extensiones por un costo mínimo. Nuestras páginas web no necesitan hosting, ya que están alojadas en nuestros servidores. Ten en cuenta que nuestras páginas web no se pueden trasladar a otro servidor, ya que utilizamos una plataforma propia."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default crecimientodemarca
