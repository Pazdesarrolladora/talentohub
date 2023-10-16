
import PropTypes from 'prop-types';
import '../css/CardLargas.css';

const CardLargas = ({ imagen, titulo, texto1 }) => {
  return (
    <div className="cardLarga">
      <img src={imagen} alt="Short description" />
      <div className="additional-text">
        <h2>{titulo}</h2>
        <p  style={{ fontFamily: 'Poppins, sans-serif',  fontSize: '20px', color: 'white' }}>{texto1}</p>
      </div>
    </div>
  );
}

CardLargas.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto1: PropTypes.string.isRequired,
};

export default CardLargas;