
import PropTypes from 'prop-types';

const Cardsinboton = ({ imagen, titulo, informacion,botoninfo,referencia,style }) => {
  return (
    <>
    <div className="card "  style={{ style }}>
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h3 className="card-title">{titulo}</h3>
      <p className="card-text">{informacion}</p>
      <a href={referencia} className="btn btn-warning d-grid gap-2">{botoninfo}</a>
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
