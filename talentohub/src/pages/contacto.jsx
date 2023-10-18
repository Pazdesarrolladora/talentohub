import Footer from "../componentes/footer";
import Navbar from "../componentes/navbar";
import CarrucelPaginas from "../componentes/carrucelpaginas";
import Formulario from "../componentes/formulario";
import logo from "../imagenes/TH.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesome
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'; // Importa los iconos de redes sociales
import "../css/Contacto.css";

const Contacto = () => {
  return (
    <>
    <Navbar />
    <CarrucelPaginas
      imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697560376/Puandmar_enr1bo.png"
    />
    <div className="container contenedorformulario">
      <div className="row">
        <div className="col-6">
          <Formulario />
        </div>
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          <img className="logoformulario" src={logo} alt="" />

          <div className="redes-sociales">
            <a href="URL_de_Tu_Facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icono-social" />
            </a>
            <a href="URL_de_Tu_Twitter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icono-social" />
            </a>
            <a href="URL_de_Tu_Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icono-social" />
            </a>
            <a href="URL_de_Tu_Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icono-social" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default Contacto;