
import PropTypes from 'prop-types';

const Cardsinboton = ({ imagen, titulo, informacion }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">
          {informacion}
        </p>
      </div>
    </div>
  );
};


Cardsinboton.propTypes = {
  imagen: PropTypes.string.isRequired, 
  titulo: PropTypes.string.isRequired, 
  informacion: PropTypes.string.isRequired, 
};

export default Cardsinboton;
