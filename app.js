const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());
//app.use(cors());

app.get('/', (req, res) => {
    res.send('¡Hola desde el servidor Express!');
  });
  
  // Ejemplo de definición de una ruta con parámetros
  app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    // Aquí podrías buscar y devolver información específica del usuario con el ID proporcionado
    res.json({ userId: id, nombre: 'Usuario Ejemplo' });
  });

  app.listen(port, () => {
    console.log(`Servidor Corriendo en puerto:${port}`);
  });

  const jwt = require('jsonwebtoken');

// Middleware para verificar el token de autenticación
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token de autenticación no proporcionado.' });
  }

  try {
    // Verificar el token y decodificar los datos del usuario
    const decoded = jwt.verify(token, 'tu_secreto_secreto');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ mensaje: 'Token de autenticación inválido.' });
  }
};

// Agregar el middleware de autenticación a las rutas que requieren autenticación
app.use('/ruta_protegida', verifyToken, rutaProtegida);
