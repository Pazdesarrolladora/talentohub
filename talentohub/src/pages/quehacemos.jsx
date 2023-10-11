import Carrusel from "../componentes/carrusel";
import Navbar from "../componentes/navbar";
import Hacemos from "../componentes/hacemos";

import Cardconbotones from "../componentes/cardconbotones";


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
        <div className="col-3 ">
          <Cardconbotones 
          imagen={"https://i.pinimg.com/564x/c4/ed/97/c4ed974f6cf0a98cf97286eff7afe7d5.jpg"} 
          titulo={"PaginasWeB"} 
          informacion={"Diseñamos y configuramos tu sitio web con una mezcla única de creatividad y funcionalidad. Más que una presencia online, creamos un portal que atrae instantáneamente a tu audiencia. Te proporcionamos no solo una plataforma para contar tu historia, sino también un medio interactivo que invita a la participación. Además, te enseñamos cómo administrarlo para que siempre esté en sintonía con la evolución de tu marca. "}
          botoninfo={"¡Cuentame más!"}
          referencia={"paginasweb"}
          tamañofoto={"12rem"}/>

          </div>
         
          <div className="col-3 ">
          <Cardconbotones 
          imagen={"https://i.pinimg.com/564x/22/b1/b3/22b1b3385ce7a17c6bb60e95e932877d.jpg"} 
          titulo={"Publicidad "} 
          informacion={"A través de estrategias publicitarias ADS, no solo atraemos clics, sino que generamos un impacto duradero. Configuramos campañas que despiertan el interés, convierten la pasividad en acción y atraen a tu audiencia objetivo. Nuestro enfoque no es solo conseguir clics, sino crear conexiones significativas que se traduzcan en clientes y conversiones. "}
          botoninfo={"¡Cuentame más!"}
          referencia={"publicidad"}
          tamañofoto={"12rem"}/>
          </div>
          <div className="col-3 ">
          <Cardconbotones 
          imagen={"https://i.pinimg.com/564x/3e/66/8b/3e668ba4f64997da4d2c7dfc04830f47.jpg"} 
          titulo={"Crecimiento de marca "} 
          informacion={"Cultivamos el crecimiento de tu marca mediante estrategias que van más allá de la construcción de identidad. Desarrollamos campañas que no solo atraen nuevos seguidores, sino que también cultivan la lealtad. Desde la narrativa de la marca hasta la participación del cliente, creamos una experiencia que hace crecer tu marca de manera sostenible y auténtica. "}
          botoninfo={"¡Cuentame más!"}
          referencia={"crecimientodemarca"}
          tamañofoto={"12rem"}/>
            
          </div>
          <div className="col-3 ">
          <Cardconbotones 
          imagen={"https://i.pinimg.com/564x/5c/65/15/5c65158c1b885e3b4616e3028f3711d8.jpg"} 
          titulo={"Redes Sociales "} 
          informacion={"En el vasto mundo de las redes sociales, no solo gestionamos tu presencia, sino que cultivamos comunidades. Creamos contenido cautivador, fomentamos conversaciones auténticas y construimos relaciones sólidas. Tu presencia en redes sociales no solo atrae seguidores, sino que también crea embajadores de marca que multiplican la resonancia de tu mensaje."}
          botoninfo={"¡Cuentame más!"}
          referencia={"redessociales"}
          tamañofoto={"12rem"}/>
           
          </div>
          
        </div>
      </div>
     

    </>
  );
};

export default Quehacemos;
