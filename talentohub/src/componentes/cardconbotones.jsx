
import PropTypes from 'prop-types';

const Cardsinboton = ({ imagen, titulo, informacion,botoninfo,referencia,style }) => {
  return (
    <>
    <div className="card "  style={{ style }}>
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{informacion}</p>
      <a href={referencia} className="btn btn-primary">{botoninfo}</a>
    </div>
  </div>
  <br />
  <br />
  </>
  
  );
};


Cardsinboton.propTypes = {
  imagen: PropTypes.string.isRequired, 
  titulo: PropTypes.string.isRequired, 
  informacion: PropTypes.string.isRequired, 
  botoninfo:PropTypes.string.isRequired,
  referencia:PropTypes.string.isRequired,
  style:PropTypes.string.isRequired,
};

export default Cardsinboton;
