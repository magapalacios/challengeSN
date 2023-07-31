const Usuario = require('../models/user'); // Importa el modelo del usuario

// Controlador para obtener la lista de usuarios (solo para administradores)
const getUsers = async (req, res) => {
    try {
      // Verifica el rol del usuario autenticado
      if (req.user.role !== 'admin') {
        return res.status(403).json({ mensaje: 'Acceso denegado. No tienes permiso para ver la lista de usuarios.' });
      }
  
      // Obtiene la lista de usuarios desde la base de datos
      const usuarios = await user.findAll();
  
      // Devuelve la respuesta con la lista de usuarios
      res.status(200).json({ usuarios });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener la lista de usuarios', error });
    }
  };
  
  // Controlador para modificar los datos de un usuario
  const updateUser = async (req, res) => {
    try {
      const { nombre, apellido, fechaDeNacimiento, dni, email, fotoDePerfil } = req.body;
  
      // Verifica el rol del usuario autenticado
      if (req.user.role !== 'admin' && req.user.id !== req.params.id) {
        return res.status(404).json({ mensaje: 'Usuario no encontrado.' });
    }

    // Actualiza los datos del usuario
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.fechaDeNacimiento = fechaDeNacimiento;
    usuario.dni = dni;
    usuario.email = email;
    usuario.fotoDePerfil = fotoDePerfil;

    // Guarda los cambios en la base de datos
    await user.save();

    // Devuelve la respuesta con los datos actualizados del usuario (opcional)
    res.status(200).json({ usuario });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al modificar los datos del usuario', error });
  }
};
  