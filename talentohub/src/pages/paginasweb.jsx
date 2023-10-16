import Navbar from "../componentes/navbar";
import Promociones from "../componentes/promociones";
import "../css/paginaweb.css";
import Cardconbotones from "../componentes/cardconbotones";
import Cardinfo from "../componentes/cardinfo";
import Footer from "../componentes/footer";

const Paginasweb = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Promociones />
        <h1 className="tituloweb">Planes de E-commerce y Desarrollo Web</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 ">
            <Cardconbotones
              imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697082385/Website_Creator-rafiki_ksaky1.png"}
              titulo={"Plan Basico"}
              informacion={[
                "• Página web atractiva y funcional .",
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
              imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697082385/Online_wishes_list-rafiki_vgclwr.png"}
              titulo={"Plan Estandar"}
              informacion={[
                "• Tienda online atractiva y profesional ",
                "• Carrito de compras ",
                "• Catálogo de productos con descripciones detalladas ",
                "• Proceso de pago seguro ",
                "• Gestión de inventario ",
                "• Integración con pasarelas de pago ",
                "• Vinculación con redes sociales ",
                "• Certificado SSL incluido ",
                "• Dominio gratis por 1 año ",
                "• ¡Lleva gratis el tutorial online para administrar tu Página Web! "
                
                // Agrega más información si es necesario
              ]}
              botoninfo={"WhatsApp"}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
          </div>
          <div className="col-12 col-lg-4">
            <Cardconbotones
              imagen={"https://res.cloudinary.com/dcwloh062/image/upload/v1697082385/Rocket-rafiki_zdoec3.png"}
              titulo={"Plan Premium"}
              informacion={[
                "• Página web completa con tienda online ",
                "• Todas las características del servicio de página web y e-commerce empresa",
                "• Proceso de pago seguro con múltiples opciones ",
                "• Integración con pasarelas de pago y redes sociales",
                "• Estrategias de marketing para la tienda online ",
                "• Certificado SSL incluido ",
                "• Dominio gratis por 1 año ",
                "• ¡Lleva gratis el tutorial online para administrar tu Página Web! ",
                
                
                // Agrega más información si es necesario
              ]}
              botoninfo={"WhatsApp"}
              referencia={"http://api.whatsapp.com/send?phone=56945111875"}
            />
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
          <div className="col-12 order-6">
            <Cardinfo
              imagen={
                "https://i.pinimg.com/564x/cf/a3/8b/cfa38b18b23a3887008bc117a6f29ac5.jpg"
              }
              titulo={"Información para Tiendas"}
              informacion={
                "Entregamos tu tienda con 10 productos/servicios y la capacidad de subir productos adicionales. Configuramos envíos por zona y te enseñamos a manejar pagos con débito o crédito directamente en tu cuenta bancaria."
              }
            />
          </div>
          <div className="col-12 order-7">
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
      <Footer />
    </>
  );
};

export default Paginasweb;
