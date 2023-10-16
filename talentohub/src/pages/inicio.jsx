import "../css/App.css";
import Navbar from "../componentes/navbar";
import Carrusel from "../componentes/carrusel";
import CardDemo from "../componentes/carddemo";
import Footer from "../componentes/footer";
import "../css/Inicio.css"
import Botonmagico from "../componentes/botonmagico";

const Inicio = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Carrusel/>
        
        {/* <h6 className="enquepodemos">En Que Podemos Ayudarte</h6> */}
        <h1 className="solucionesofrecemos">¿QUÉ SOLUCIONES OFRECEMOS?</h1>
        <h5 className="elmejor">Queremos que seas el mejor!</h5>
        <h5 className="enfocados">
          Estamos enfocados en entregar soluciones personalizadas y
          resultados de calidad.
        </h5>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3" >
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081457/Web_search-cuate_pumjen.png"
              }
              titulo={"Paginas Web"}
              texto1={
                "Diseñamos sitios web atractivos que cuentan tu historia y fomentan la interacción, adaptándonos a la evolución de tu marca."
              }
              texto2={""}
              enlace={"paginasweb"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081457/Marketing_consulting-cuate_rshjbc.png"
              }
              titulo={"Publicidad"}
              texto1={
                "A través de estrategias publicitarias ADS, creamos conexiones significativas que generan clientes y conversiones."
              }
              texto2={""}
              enlace={"publicidad"}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081456/Growing-cuate_z9snqs.png"
              }
              titulo={"Crecimiento de marca"}
              texto1={
                "Fomentamos el crecimiento auténtico de tu marca, atrayendo seguidores leales y creando experiencias excepcionales."
              }
              texto2={""}
              enlace={"crecimientodemarca"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <CardDemo
              imagen={
                "https://res.cloudinary.com/dcwloh062/image/upload/v1697081456/Social_ideas-cuate_yrcaod.png"
              }
              titulo={"Redes Sociales"}
              texto1={
                "En redes sociales, creamos comunidades, conversaciones y embajadores de marca."
              }
              texto2={""}
              enlace={"redessociales"}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid contactanos">
    <div className="row">
        <div className="col-12 col-md-6 mb-3">
            {/* <h1 className="deseas">Deseas obtener más información o necesitas algo especial? Lo que sea que tengas en mente, podemos hacerlo. ¡Contáctanos!</h1> */}
        </div>
        <br />
        <br />
        <div className="col-12 col-md-6 botoncontacto">
            <div className="botonmagico">
                <Botonmagico
                enlace={"contacto"}/>
            </div>
        </div>
    </div>
</div>
      <Footer />
    </>
  );
};

export default Inicio;
