const express = require('express');
const app = express();
const db = require('./backend/src/db');


// Configuración y middleware aquí...

// Rutas y lógica de manejo de peticiones aquí...

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Servidor backend iniciado en el puerto ${PORT}`);
});
