import Carrusel from "../componentes/carrusel";
import Navbar from "../componentes/navbar";
import Hacemos from "../componentes/hacemos";

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
        <div className="col-3 ">
          <Cardconbotones 
          imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"} 
          titulo={"pagina web"} 
          informacion={"informacion"}
          botoninfo={"boton info"}
          referencia={"paginasweb"}
          tamañofoto={"12rem"}/>

          </div>
         
          <div className="col-3 ">
          <Cardconbotones 
          imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"} 
          titulo={"Publicidad"} 
          informacion={"informacion"}
          botoninfo={"boton info"}
          referencia={"publicidad"}
          tamañofoto={"12rem"}/>
          </div>
          <div className="col-3 ">
          <Cardconbotones 
          imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"} 
          titulo={"Crecimiento de marca"} 
          informacion={"informacion"}
          botoninfo={"boton info"}
          referencia={"crecimientodemarca"}
          tamañofoto={"12rem"}/>
            
          </div>
          <div className="col-3 ">
          <Cardconbotones 
          imagen={"https://res.cloudinary.com/diiuqfujg/image/upload/v1688394746/samples/shoe.jpg"} 
          titulo={"redes Sociales"} 
          informacion={"informacion"}
          botoninfo={"boton info"}
          referencia={"redessociales"}
          tamañofoto={"12rem"}/>
           
          </div>
          
        </div>
      </div>
     

    </>
  );
};

export default Quehacemos;
