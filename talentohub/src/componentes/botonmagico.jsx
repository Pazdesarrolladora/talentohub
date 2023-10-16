import "../css/botonmagico.css"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Botonmagico = ({ enlace }) => {
  return (
    <Link to={enlace} className="botonmagico">
      Contactanos
    </Link>
  );
};
Botonmagico.propTypes = {
  enlace: PropTypes.string
}

export default Botonmagico