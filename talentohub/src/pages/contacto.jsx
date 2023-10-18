// Contacto.js

import React, { useState } from 'react';
import Footer from "../componentes/footer";
import Navbar from "../componentes/navbar";
import "../css/contaco.css";
import CarrucelPaginas  from "../componentes/carrucelpaginas";
import Form from '../componentes/Form';

const Contacto = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías implementar la lógica para enviar el formulario al backend
    // Puedes usar fetch o Axios para hacer una solicitud POST al servidor
    console.log('Formulario enviado:', formValues);
  };

  return (
    <>
      <Navbar />
      <CarrucelPaginas
        imagen="https://res.cloudinary.com/dcwloh062/image/upload/v1697645715/wepik-export-20231018112627zN6o_cajqf6.png"
      />
      <div className="container-fluid">
        <div className="row">
          <Form onSubmit={handleSubmit} onChange={handleInputChange} values={formValues} />
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default Contacto;
