import Navbar from "../componentes/navbar";
// import Carrusel from "../componentes/carrusel";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Cardinfo from "../componentes/cardinfo";
import Footer from "../componentes/footer";

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
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/brand_loyalty-pana_tlithf.png"}
                titulo={"Presencia Online"}
                informacion={[
                  "Investigación básica de palabras clave para la industria 🔍.",
                  "Creación y gestión de una campaña en una plataforma de publicidad (Google Ads o Facebook Ads) 📈.",
                  "Análisis de Resultados: Informe mensual de rendimiento 📊",
                  // Agrega más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={"imagen_url"}
                titulo={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Holding_the_arrow-rafiki_kmsmef.png"}
                informacion={[
                  "Investigación avanzada de palabras clave y análisis de competencia 🔍📈.",
                  "Creación y gestión de dos campañas en plataformas de publicidad seleccionadas 📈.",
                  "Diseño de anuncios creativos y segmentación de audiencia 🎨.",
                  "Informe quincenal de rendimiento y ajuste de estrategias según los resultados 🔄.",
                  // Puedes agregar más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697404364/Success_factors-amico_zfmein.png"}
                titulo={"Dominio del mercado"}
                informacion={[
                  "Investigación exhaustiva de palabras clave y análisis detallado de la competencia 🔍📊.",
                  "Creación y gestión de tres campañas en varias plataformas de publicidad 📈.",
                  "Diseño de anuncios altamente creativos y personalizados 🚀.",
                  "Implementación de estrategias de retargeting y ajuste constante de la campaña ⚙️.",
                  "Informe semanal de rendimiento con reuniones de consultoría para discutir estrategias futuras 📆.",
                  // Puedes agregar más información si es necesario
                ]}
                
                botoninfo={"¡Voy!"}
                referencia={"referencia"}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Cardinfo
                // imagen={"https://i.pinimg.com/736x/93/29/00/9329004761a79d36f5171aa0308125f1.jpg"}
                titulo={"Proceso"}
                informacion={
                  "Inicia seleccionando tu promoción preferida y recibirás un formulario para reservar tu proyecto. En  dos semanas, tendrás tu proyecto listo para afinar detalles. Te proporcionamos el proyecto activo con fotografías, y como autoadministrador, puedes cargar imágenes ilimitadas."
                }
              />
            </div>
            <div className="col-12">
              <Cardinfo
                // imagen={"https://i.pinimg.com/564x/2c/2e/e0/2c2ee05faeeaa92532d532f565c8a697.jpg"}
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
            <div className="col-12">
              <Cardinfo
                // imagen={"https://i.pinimg.com/564x/cf/a3/8b/cfa38b18b23a3887008bc117a6f29ac5.jpg"}
                titulo={"Informacion para Tiendas!"}
                informacion={
                  "Entregamos tu tienda con 10 productos/servicios y la capacidad de subir productos adicionales. Configuramos envíos por zona y te enseñamos a manejar pagos con débito o crédito directamente en tu cuenta bancaria."
                }
              />
            </div>
            <div className="col-12">
              <Cardinfo
                // imagen={"https://i.pinimg.com/564x/8b/b8/30/8bb830a8930c74bf6abdb04288ce5330.jpg"}
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

export default Publicidad;
