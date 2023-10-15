import PropTypes from 'prop-types';
import '../css/cardcomponente.css';

const CardDemo = ({ imagen, titulo, texto1, texto2, enlace }) => {
  return (
    <section className="wrapper-new">
      <div className="card-new" data-effect="zoom-new">
        <a href={enlace}> {/* Agregamos un enlace a la imagen */}
          <button className="card__save-new js-save-new" type="button">
            <i className="fa fa-bookmark"></i>
          </button>
          <figure className="card__image-new">
            <img src={imagen} alt="Short description" />
          </figure>
        </a>
        <div className="card__header-new"></div>
        <div className="card__body-new">
          <h3 className="card__name-new">{titulo}</h3>
          <p className="card__job-new">{texto1}</p>
          <p className="card__bio-new">{texto2}.</p>
        </div>
      </div>
    </section>
  );
}

CardDemo.propTypes = {
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto1: PropTypes.string.isRequired,
  texto2: PropTypes.string.isRequired,
  enlace: PropTypes.string.isRequired, // La URL de la página a la que deseas redirigir
};

export default CardDemo;
