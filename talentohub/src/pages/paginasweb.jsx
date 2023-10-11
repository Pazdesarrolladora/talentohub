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
        <Carrusel />
        <Promociones />
        <h1 className="tituloweb">Planes de Desarrollo Web y E-commerce</h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Cardconbotones
                imagen={
                  "https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"
                }
                titulo={"titulo"}
                informacion={"informacion"}
                botoninfo={"cotiza"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={
                  "https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"
                }
                titulo={"titulo"}
                informacion={"informacion"}
                botoninfo={"cotiza"}
                referencia={"referencia"}
              />
            </div>
            <div className="col-4">
              <Cardconbotones
                imagen={
                  "https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"
                }
                titulo={"titulo"}
                informacion={"informacion"}
                botoninfo={"cotiza"}
                referencia={"referencia"}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
            <Cardinfo 
              imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"} 
              titulo={"titulo"} 
              informacion={"informacion"}/>
            </div>
            <div className="col-6">
            <Cardinfo 
              imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"} 
              titulo={"titulo"} 
              informacion={"informacion"}/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Cardinfo 
              imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"} 
              titulo={"titulo"} 
              informacion={"informacion"}/>
            </div>
            <div className="col-6">
            <Cardinfo 
              imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"} 
              titulo={"titulo"} 
              informacion={"informacion"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paginasweb;
