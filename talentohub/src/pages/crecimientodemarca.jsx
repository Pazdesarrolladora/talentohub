import Navbar from "../componentes/navbar";
import Carrusel from "../componentes/carrusel";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Cardinfo from "../componentes/cardinfo";

const Crecimientodemarca = () => {
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
                  "https://i.pinimg.com/564x/da/36/73/da3673904b87e34da933a62444cf8eee.jpg"
                }
                titulo={"Establece tu identidad"}
                informacion={"Ofrecemos un servicio integral de desarrollo de identidad, que incluye la creación y desarrollo de la identidad visual de tu marca, brindando una imagen distintiva y atractiva. Además, desarrollamos una estrategia básica de marketing digital, creando contenido relevante y atractivo para fortalecer la presencia de tu marca en línea. Establecemos una sólida presencia en redes sociales y realizamos un análisis competitivo básico para posicionarte de manera efectiva en el mercado. Con nuestro enfoque completo, impulsamos la visibilidad y el atractivo de tu marca."}
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-6">
              <Cardconbotones
                imagen={
                  "https://i.pinimg.com/564x/0d/3f/91/0d3f91bfacfa9d9d9538fedb95101bd7.jpg"
                }
                titulo={"Vamos al siguiente nivel"}
                informacion={"Ofrecemos un servicio completo de desarrollo de marca, abarcando la creación integral de la identidad visual, tono de marca y mensaje para proporcionar una presencia coherente y distintiva. Además, desarrollamos e implementamos estrategias completas de marketing digital, generando contenido creativo y altamente atractivo para potenciar la marca. Gestionamos de manera avanzada la presencia en redes sociales, realizamos un análisis profundo de la competencia y del mercado, y creamos campañas especiales para eventos clave. Con nuestro enfoque integral, fortalecemos la identidad y posición de tu marca de manera efectiva"}
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

export default Crecimientodemarca