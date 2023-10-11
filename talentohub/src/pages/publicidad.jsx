import Navbar from "../componentes/navbar";
import Carrusel from "../componentes/carrusel";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Cardinfo from "../componentes/cardinfo";

const Publicidad = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {/* <Carrusel /> */}
        <Promociones />
        <h1 className="tituloweb">Publicidad</h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Cardconbotones
                imagen={
                  "https://i.pinimg.com/564x/46/eb/c8/46ebc81dd7af270dcb12865e2fcf3371.jpg"
                }
                titulo={"PRESENCIA ONLINE"}
                informacion={"Realizamos una investigación integral de palabras clave para tu industria, identificando oportunidades clave. Además, creamos y administramos campañas publicitarias eficaces en plataformas como Google Ads o Facebook Ads, asegurando un rendimiento óptimo. Proporcionamos informes mensuales detallados sobre el rendimiento de las campañas, ofreciendo una visión clara y concisa de los resultados obtenidos."}
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={
                  "https://i.pinimg.com/564x/1a/75/76/1a7576912beb4801d5603539d8075749.jpg"
                }
                titulo={"CRECIMIENTO EFECTIVO"}
                informacion={"Realizamos una investigación avanzada de palabras clave y análisis de competencia para garantizar una estrategia sólida. Creamos y gestionamos dos campañas publicitarias en plataformas seleccionadas, destacando mediante anuncios creativos y una precisa segmentación de audiencia. Evaluamos el rendimiento quincenalmente, ajustando estrategias según los resultados, y proporcionamos informes detallados para una comprensión completa de la efectividad de las campañas."}
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={
                  "https://i.pinimg.com/564x/3e/3b/1f/3e3b1f889e8f251faad15165f6a55054.jpg"
                }
                titulo={"DOMINIO DEL MERCADO"}
                informacion={"TalentoHuB realiza una investigación exhaustiva de palabras clave y un análisis detallado de la competencia para informar su estrategia. La empresa crea y gestiona tres campañas publicitarias en diversas plataformas, incorporando anuncios altamente creativos y personalizados. Implementa estrategias avanzadas, como retargeting y ajustes continuos de campaña para maximizar el impacto. TalentoHuB evalúa el rendimiento semanalmente y ofrece informes detallados, complementados con reuniones de consultoría para discutir estrategias futuras y optimización constante"}
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
              // imagen={"https://i.pinimg.com/736x/93/29/00/9329004761a79d36f5171aa0308125f1.jpg"} 
              titulo={"Proceso"} 
              informacion={"Inicia seleccionando tu promoción preferida y recibirás un formulario para reservar tu proyecto. En  dos semanas, tendrás tu proyecto listo para afinar detalles. Te proporcionamos el proyecto activo con fotografías, y como autoadministrador, puedes cargar imágenes ilimitadas."}/>
            </div>
            <div className="col-6">
            <Cardinfo 
              // imagen={"https://i.pinimg.com/564x/2c/2e/e0/2c2ee05faeeaa92532d532f565c8a697.jpg"} 
              titulo={"Renovacion"} 
              informacion={"Durante el primer año, disfruta de dominio y alojamiento web gratuitos. A partir del segundo año, la renovación anual se realiza por 1 UTM, asegurando continuidad y estabilidad para tu servicio."}/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Cardinfo 
              // imagen={"https://i.pinimg.com/564x/cf/a3/8b/cfa38b18b23a3887008bc117a6f29ac5.jpg"} 
              titulo={"Informacion para Tiendas!"} 
              informacion={"Entregamos tu tienda con 10 productos/servicios y la capacidad de subir productos adicionales. Configuramos envíos por zona y te enseñamos a manejar pagos con débito o crédito directamente en tu cuenta bancaria."}/>
            </div>
            <div className="col-6">
            <Cardinfo 
              // imagen={"https://i.pinimg.com/564x/8b/b8/30/8bb830a8930c74bf6abdb04288ce5330.jpg"} 
              titulo={"Otros detalles"} 
              informacion={"Nuestros planes incluyen dominio .com gratis. Puedes agregar extensiones por un costo mínimo. Nuestras páginas web no necesitan hosting, ya que están alojadas en nuestros servidores. Ten en cuenta que nuestras páginas web no se pueden trasladar a otro servidor, ya que utilizamos una plataforma propia."}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Publicidad