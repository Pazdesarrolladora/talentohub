import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange, values }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="mb-3">
          <h1 className="text-center">Nos emociona conocerte</h1>
          <label htmlFor="name" className="form-label">
            ¿Cuál es tu nombre?
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
            placeholder="Roma Valenzuela"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Cuéntanos tu idea
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            value={values.message}
            onChange={onChange}
            placeholder="¡Estamos emocionados de conocer tu proyecto! Por favor, comparte algunos detalles sobre tu idea de desarrollo web, estrategias de marketing, crecimiento de marca o cualquier aspecto relacionado con las redes sociales. Cuéntanos tus metas, desafíos y cualquier otra información relevante. ¡Estamos aquí para convertir tu visión en realidad!"
          ></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit" onClick={onSubmit}>
            ¡Allá Vamos!
          </button>
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default Form;
