import Navbar from "../componentes/navbar";
import Hacemos from "../componentes/hacemos";
import CardDemo from "../componentes/carddemo";
import Cardconbotones from "../componentes/cardconbotones";
import Footer from "../componentes/footer";

const Quehacemos = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        {/* <Carrusel /> */}
        <Hacemos />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081457/Web_search-cuate_pumjen.png"
              }
              titulo={"Paginas Web"}
              texto1={
                "Diseñamos y configuramos tu sitio web con una mezcla única de creatividad y funcionalidad. Más que una presencia online, creamos un portal que atrae instantáneamente a tu audiencia. Te proporcionamos no solo una plataforma para contar tu historia, sino también un medio interactivo que invita a la participación. Además, te enseñamos cómo administrarlo para que siempre esté en sintonía con la evolución de tu marca"
              }
              texto2={""}
            />
          </div>
          <div className="col-6 ">
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081457/Marketing_consulting-cuate_rshjbc.png"
              }
              titulo={"Publicidad"}
              texto1={
                "A través de estrategias publicitarias ADS, no solo atraemos clics, sino que generamos un impacto duradero. Configuramos campañas que despiertan el interés, convierten la pasividad en acción y atraen a tu audiencia objetivo. Nuestro enfoque no es solo conseguir clics, sino crear conexiones significativas que se traduzcan en clientes y conversiones."
              }
              texto2={""}
            />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}></div>
      <div className="container">
        <div className="row">
          <div className="col-6 ">
           
              <CardDemo
                imagen={
                  "https://res.cloudinary.com/dcwloh062/image/upload/v1697081456/Growing-cuate_z9snqs.png"
                }
                titulo={"Crecimiento de marca"}
                texto1={
                  "Cultivamos el crecimiento de tu marca mediante estrategias que van más allá de la construcción de identidad. Desarrollamos campañas que no solo atraen nuevos seguidores, sino que también cultivan la lealtad. Desde la narrativa de la marca hasta la participación del cliente, creamos una experiencia que hace crecer tu marca de manera sostenible y auténtica."
                }
                texto2={""}
              />
            </div>
            <div className="col-6 ">
              <CardDemo
                imagen={
                  "https://res.cloudinary.com/dcwloh062/image/upload/v1697081456/Social_ideas-cuate_yrcaod.png"
                }
                titulo={"Redes Sociales"}
                texto1={
                  "En el vasto mundo de las redes sociales, no solo gestionamos tu presencia, sino que cultivamos comunidades. Creamos contenido cautivador, fomentamos conversaciones auténticas y construimos relaciones sólidas. Tu presencia en redes sociales no solo atrae seguidores, sino que también crea embajadores de marca que multiplican la resonancia de tu mensaje."
                }
                texto2={""}
              />
            </div>
          
        </div>
      </div>
      <div style={{ marginBottom: '40px' }}></div>
      <Footer />
    </>
  );
};

export default Quehacemos;
