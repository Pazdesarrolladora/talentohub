import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../imagenes/TH.png"
import "../css/footer.css"

const Footer = () => {
  return (
    <>
    <div className="containerfluid bg-black ">
    <footer className="d-flex flex-wrap justify-content-between align-items-center ">
      <p className="hecho col-md-4 mb-0 text-white" style={{ fontFamily: 'Poppins, sans-serif'}}>© 2023 Hecho X TalentoHuB.</p>
  
      <a href="/" id='logo' className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none m-2">
      <img src={logo} alt="Logo" width="90" height="90" />

      </a>
  
      <ul className="nav col-md-2  nav redes-sociales">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-white"><FontAwesomeIcon icon={faFacebook} />  </a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-white"><FontAwesomeIcon icon={faInstagram} /> </a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-white"><FontAwesomeIcon icon={faLinkedin} /> </a></li>
 
      </ul>
    </footer>
  </div>
  </>
  )
}

export default Footer