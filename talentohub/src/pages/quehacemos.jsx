import Carrusel from "../componentes/carrusel";
import Navbar from "../componentes/navbar";
import Hacemos from "../componentes/hacemos";
import Cardsinboton from "../componentes/cardsinboton";
import Cardconbotones from "../componentes/cardconbotones";

const Quehacemos = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Carrusel />
        <Hacemos />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Cardsinboton
              imagen={
                "https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"
              }
              titulo={"hola"}
              informacion={"mundo"}
            />
          </div>
          <div className="col-3">
            <Cardsinboton
              imagen={
                "https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"
              }
              titulo={"hola"}
              informacion={"mundo"}
            />
          </div>
          <div className="col-3">
            <Cardsinboton
              imagen={
                "https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"
              }
              titulo={"hola"}
              informacion={"mundo"}
            />
          </div>
          <div className="col-3">
            <Cardsinboton
              imagen={
                "https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"
              }
              titulo={"hola"}
              informacion={"mundo"}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Cardconbotones 
            imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"}
             titulo={"titulo"}
              informacion={"informacion"}
              botoninfo={"nombre boton"}
              referencia={"referencia boton"}/>
          </div>
          <div className="col-4">
          <Cardconbotones 
            imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"}
             titulo={"titulo"}
              informacion={"informacion"}
              botoninfo={"nombre boton"}
              referencia={"referencia boton"}/>
          </div>
          <div className="col-4">
          <Cardconbotones 
            imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"}
             titulo={"titulo"}
              informacion={"informacion"}
              botoninfo={"nombre boton"}
              referencia={"referencia boton"}/>
          </div>
        </div>
      </div>
      <br />
      <br />

    </>
  );
};

export default Quehacemos;
