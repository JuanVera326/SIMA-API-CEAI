// Importa Express
const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();

// Define una ruta para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo!');
});

// Escucha en un puerto (por ejemplo, 3000)
const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});