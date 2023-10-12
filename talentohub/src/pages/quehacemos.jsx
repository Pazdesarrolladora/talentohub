import Navbar from "../componentes/navbar";
import Hacemos from "../componentes/hacemos";

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
          <div className="col-12 col-md-6 col-lg-3">
            <Cardconbotones
              imagen={"URL_de_la_imagen_1"}
              titulo={"Título del Card 1"}
              informacion={[
                "Información 1",
                "Información 2",
                "Información 3",
                // Agrega más información si es necesario
              ]}
              botoninfo={"¡Voy!"}
              referencia={"paginasweb"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cardconbotones
              imagen={"URL_de_la_imagen_2"}
              titulo={"Título del Card 2"}
              informacion={[
                "Otra información 1",
                "Otra información 2",
                "Otra información 3",
                // Agrega más información si es necesario
              ]}
              botoninfo={"¡Voy!"}
              referencia={"publicidad"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cardconbotones
              imagen={"URL_de_la_imagen_3"}
              titulo={"Título del Card 3"}
              informacion={[
                "Más información 1",
                "Más información 2",
                "Más información 3",
                // Agrega más información si es necesario
              ]}
              botoninfo={"¡Voy!"}
              referencia={"crecimientodemarca"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <Cardconbotones
              imagen={"URL_de_la_imagen_4"}
              titulo={"Título del Card 4"}
              informacion={[
                "Otra información 1",
                "Otra información 2",
                "Otra información 3",
                // Agrega más información si es necesario
              ]}
              botoninfo={"¡Voy!"}
              referencia={"redessociales"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Quehacemos;
