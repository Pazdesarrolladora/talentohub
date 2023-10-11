import Navbar from "../componentes/navbar";
import Carrusel from "../componentes/carrusel";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Cardinfo from "../componentes/cardinfo";

const Redessociales = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {/* <Carrusel /> */}
        <Promociones />
        <h1 className="tituloweb">Planes de E-commerce y Desarrollo Web </h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Cardconbotones
                imagen={
                  "https://i.pinimg.com/564x/c4/9d/f1/c49df1b78b8debd2c12dfaa823ad6c0f.jpg"
                }
                titulo={"Presencia Social Inicial"}
                informacion={"Brindamos un servicio completo de creación y optimización de perfiles en las principales redes sociales, asegurando una presencia efectiva y coherente. Desarrollamos una estrategia inicial de contenido, que incluye publicaciones regulares y programadas en las redes sociales, manteniendo una presencia constante. Además, ofrecemos interacción básica con seguidores para fortalecer la conexión con la audiencia. Para evaluar el rendimiento, proporcionamos informes mensuales detallados. Con nuestro enfoque integral, optimizamos la presencia y el compromiso en las redes sociales de manera eficaz. "}
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-6">
              <Cardconbotones
                imagen={
                  "https://i.pinimg.com/564x/b5/fd/70/b5fd70e742e72b0496b4154768c8d991.jpg"
                }
                titulo={"Impulsa tu presencial Social"}
                informacion={"Ofrecemos un servicio completo de creación y optimización de perfiles en las principales redes sociales, asegurando una presencia sólida y coherente. Desarrollamos y ejecutamos una estrategia avanzada de contenido, con publicaciones regulares y estratégicas para maximizar el alcance. Mantenemos una interacción activa con seguidores, gestionando comentarios y mensajes directos de manera proactiva. Además, gestionamos anuncios en redes sociales para potenciar la visibilidad. Proporcionamos informes detallados de rendimiento con recomendaciones para la mejora continua, asegurando una presencia efectiva y en constante evolución en las redes sociales"}
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
          
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <Cardinfo 
              imagen={"https://i.pinimg.com/736x/93/29/00/9329004761a79d36f5171aa0308125f1.jpg"} 
              titulo={"Proceso"} 
              informacion={"Inicia seleccionando tu promoción preferida y recibirás un formulario para reservar tu proyecto. En  dos semanas, tendrás tu proyecto listo para afinar detalles. Te proporcionamos el proyecto activo con fotografías, y como autoadministrador, puedes cargar imágenes ilimitadas."}/>
            </div>
            <div className="col-6">
            <Cardinfo 
              imagen={"https://i.pinimg.com/564x/2c/2e/e0/2c2ee05faeeaa92532d532f565c8a697.jpg"} 
              titulo={"Renovacion"} 
              informacion={"Durante el primer año, disfruta de dominio y alojamiento web gratuitos. A partir del segundo año, la renovación anual se realiza por 1 UTM, asegurando continuidad y estabilidad para tu servicio."}/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Cardinfo 
              imagen={"https://i.pinimg.com/564x/cf/a3/8b/cfa38b18b23a3887008bc117a6f29ac5.jpg"} 
              titulo={"Informacion para Tiendas!"} 
              informacion={"Entregamos tu tienda con 10 productos/servicios y la capacidad de subir productos adicionales. Configuramos envíos por zona y te enseñamos a manejar pagos con débito o crédito directamente en tu cuenta bancaria."}/>
            </div>
            <div className="col-6">
            <Cardinfo 
              imagen={"https://i.pinimg.com/564x/8b/b8/30/8bb830a8930c74bf6abdb04288ce5330.jpg"} 
              titulo={"Otros detalles"} 
              informacion={"Nuestros planes incluyen dominio .com gratis. Puedes agregar extensiones por un costo mínimo. Nuestras páginas web no necesitan hosting, ya que están alojadas en nuestros servidores. Ten en cuenta que nuestras páginas web no se pueden trasladar a otro servidor, ya que utilizamos una plataforma propia."}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Redessociales