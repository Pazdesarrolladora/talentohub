import Navbar from "../componentes/navbar";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Cardinfo from "../componentes/cardinfo";
import Footer from "../componentes/footer";

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
                titulo={"Presencia social inicial"}
                informacion={[
                  "Creación y optimización de perfiles en las principales redes sociales 🔗.",
                  "Desarrollo de una estrategia de contenido inicial 📅.",
                  "Publicación regular y programada en las redes sociales ⏰.",
                  "Interacción básica con seguidores 👥.",
                  "Informe mensual de rendimiento 📊.",
                  // Puedes agregar más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"redessociales"}
              />
            </div>
            <div className="col-6">
              <Cardconbotones
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Social_Growth-cuate_odloga.png"}
                titulo={"Impulsa tu presencia"}
                informacion={[
                  "Creación y optimización de perfiles en las principales redes sociales 🔗.",
                  "Desarrollo y ejecución de una estrategia de contenido avanzada 📅.",
                  "Publicación regular y estratégica para maximizar el alcance ⏰.",
                  "Interacción activa con seguidores, gestión de comentarios y mensajes directos 👥💬.",
                  "Gestión de anuncios en redes sociales 📢.",
                  "Informe detallado de rendimiento con recomendaciones para la mejora continua 📊.",
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

export default Redessociales;
