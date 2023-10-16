import "../css/botonmagico.css"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Botonmagico = ({ enlace }) => {
  return (
    <Link to={enlace} className="botonmagico"  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bolder', fontSize: '30px', color: 'black' }}>
      Contactanos
    </Link>
  );
};
Botonmagico.propTypes = {
  enlace: PropTypes.string
}

export default Botonmagico