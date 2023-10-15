import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../css/navbar.css";
import TH from "../imagenes/TH.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="logo">
              <img className="logo-img" src={TH} alt="Logo" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="quehacemos"
                >
                  ¿Que Hacemos?
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="quehacemos"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="paginasweb">
                      Paginas web
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="publicidad">
                      Publicidad
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="crecimientodemarca">
                      Crecimiento de Marca
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="redessociales">
                      Redes Sociales
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="portafolio"
                >
                  Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
            <a className="nav-link active m-1" aria-current="page" href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="nav-link active m-1" aria-current="page" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="nav-link active m-1" aria-current="page" href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
