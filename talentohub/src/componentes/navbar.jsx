
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
                <a className="nav-link active" aria-current="page" href="/" style={{ fontFamily: 'Poppins, sans-serif'}}>
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="quienes"
                >
                  ¿Quienes Somos?
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="paginasweb"
                >
                  Desarrollo Web
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="publicidad"
                  style={{ fontFamily: 'Poppins, sans-serif'}}
                >
                  Publicidad
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="crecimientodemarca"
                >
                  Crecimiento
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="redessociales"
                >
                  RRSS
                </a>
              </li>
              
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="contacto"
                  style={{ fontFamily: 'Poppins, sans-serif'}}
                >
                  Contacto
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
