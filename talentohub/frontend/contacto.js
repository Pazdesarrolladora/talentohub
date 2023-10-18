const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/enviar-correo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
  
      if (response.ok) {
        console.log('Correo enviado con éxito');
        // Puedes realizar cualquier acción adicional después de enviar el formulario
      } else {
        console.error('Error al enviar el formulario');
        // Manejar el error según tus necesidades
      }
    } catch (error) {
      console.error('Error de red:', error);
      // Manejar el error según tus necesidades
    }
  };
  