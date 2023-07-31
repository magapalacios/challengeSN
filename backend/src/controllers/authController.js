const user = require('../models/user'); // Importa el modelo del usuario
const bcrypt = require('bcrypt'); // Para el hash de contraseñas
const jwt = require('jsonwebtoken'); // Para manejar los tokens JWT

// Controlador para el registro de un nuevo usuario
const register = async (req, res) => {
    try {
      const { nombre, apellido, fechaDeNacimiento, dni, email, contrasena, fotoDePerfil } = req.body;
  
      // Verifica si el usuario ya existe en la base de datos
      const usuarioExistente = await user.findOne({ where: { email } });
      if (usuarioExistente) {
        return res.status(409).json({ mensaje: 'El email ya está registrado. Inicia sesión o utiliza otro email.' });
      }
  
      // Hashea la contraseña antes de guardarla en la base de datos
      const hashedPassword = await bcrypt.hash(contrasena, 10);
  
      // Crea un nuevo usuario en la base de datos
      const nuevoUsuario = await Usuario.create({
        nombre,
        apellido,
        fechaDeNacimiento,
        dni,
        email,
        contrasena: hashedPassword,
        fotoDePerfil,
      });
  
      // Genera un token JWT para el usuario recién registrado
      const token = jwt.sign({ id: nuevoUsuario.id, rol: nuevoUsuario.rol }, 'tu_secreto_secreto', { expiresIn: '1h' });
  
      // Devuelve la respuesta con el token y otros datos del usuario (opcional)
      res.status(201).json({ token, usuario: nuevoUsuario });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al registrar el usuario', error });
    }
  };
  
  // Controlador para el inicio de sesión
  const login = async (req, res) => {
    try {
      const { email, contrasena } = req.body;
  
      // Busca el usuario en la base de datos por su email
      const user = await user.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ mensaje: 'El email no está registrado. Regístrate primero.' });
      }
  
      // Comprueba si la contraseña es correcta
      const contrasenaCorrecta = await bcrypt.compare(contrasena, usuario.contrasena);
      if (!contrasenaCorrecta) {
        return res.status(401).json({ mensaje: 'Contraseña incorrecta. Intenta nuevamente.' });
      }
  
      // Genera un token JWT para el usuario que inicia sesión
      const token = jwt.sign({ id: usuario.id, rol: usuario.rol }, 'tu_secreto_secreto', { expiresIn: '1h' });
  
      // Devuelve la respuesta con el token y otros datos del usuario (opcional)
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al iniciar sesión', error });
    }
  };
  