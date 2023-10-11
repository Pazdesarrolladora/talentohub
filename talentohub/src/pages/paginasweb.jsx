import Navbar from "../componentes/navbar";
import Carrusel from "../componentes/carrusel";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Cardinfo from "../componentes/cardinfo";

const Paginasweb = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {/* <Carrusel /> */}
        <Promociones />
        <h1 className="tituloweb">Planes de E-commerce y Desarrollo Web </h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Cardconbotones
                imagen={
                  "https://i.pinimg.com/564x/f2/4c/53/f24c530147b53131e9eecbb23340de09.jpg"
                }
                titulo={"Presencia Online Básica"}
                informacion={"Creamos una página web atractiva y funcional que incluye un menú adaptable, galería de imágenes, información detallada sobre la empresa o proyecto, y un formulario de contacto para facilitar la interacción. Además, integramos tu presencia en redes sociales para una mayor conectividad. Garantizamos la seguridad con un certificado SSL incluido y ofrecemos el dominio gratis por el primer año. Para que puedas administrar tu página web de manera efectiva, también proporcionamos un tutorial online gratuito."}
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={
                  "https://i.pinimg.com/564x/75/8c/47/758c47ea6cb9e77217b875c810272d25.jpg"
                }
                titulo={"Vende con Estilo"}
                informacion={"Creamos una tienda online atractiva y profesional que ofrece funcionalidades avanzadas, como un carrito de compras, un catálogo de productos con descripciones detalladas, un proceso de pago seguro y una eficiente gestión de inventario. Además, garantizamos una integración completa con pasarelas de pago y redes sociales para una experiencia de compra completa. Aseguramos la seguridad de tu tienda con un certificado SSL incluido y proporcionamos el dominio gratis por el primer año. Para facilitar la administración, ofrecemos un tutorial online gratuito. ¡Haz despegar tu negocio online con nosotros! ."}
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={
                  "https://i.pinimg.com/564x/cd/a2/bd/cda2bd498a15bc4f043aea5ed40806e2.jpg"
                }
                titulo={"Potencia tu Negocio"}
                informacion={"Ofrecemos un servicio de diseño completo que abarca la creación de una página web completa con tienda online, proporcionando funcionalidades premium que incluyen todas las características de nuestros servicios de página web y e-commerce. Garantizamos un proceso de pago seguro con múltiples opciones, una integración completa con pasarelas de pago y redes sociales, y extras como estrategias de marketing especializadas para potenciar tu tienda online. También nos ocupamos de la seguridad y el mantenimiento, con un certificado SSL incluido y un dominio gratuito por el primer año. Además, para facilitar la administración, ofrecemos un tutorial online gratuito. ¡Haz despegar tu presencia online con nuestra solución integral"}
                botoninfo={"!Voy!"}
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

export default Paginasweb;
