import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "../css/navbar.css"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
                <a className="nav-link active" aria-current="page" href="quehacemos">
                  ¿Qué Hacemos?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="paginasweb">
                  Paginas Web
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="marketing">
                  Marketing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="portafolio">
                  Portafolio
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
