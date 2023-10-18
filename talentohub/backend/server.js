// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/enviar-correo', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pazvalenzua@gmail.com',
      pass: '0511Rena',
    },
  });

  const mailOptions = {
    from: 'tu-correo@gmail.com',
    to: 'pazvalenzua@gmail.com',
    subject: 'Nuevo formulario de contacto',
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado con éxito');
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});
