import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../imagenes/TH.png"

const Footer = () => {
  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-muted">© 2023 Hecho X Talento Hub.</p>
  
      <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img src={logo} alt="Logo" width="80" height="80" />

      </a>
  
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"><FontAwesomeIcon icon={faFacebook} />  </a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"><FontAwesomeIcon icon={faInstagram} /> </a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted"><FontAwesomeIcon icon={faLinkedin} /> </a></li>
 
      </ul>
    </footer>
  </div>
  )
}

export default Footer