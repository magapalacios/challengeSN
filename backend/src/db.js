const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('usuario', 'usuario', 'contraseña', {
    host: 'localhost',
    port: 3306, 
    dialect: 'mysql',
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });

  //module.exports = sequelize;
  const usuario = sequelize.define('usuario', {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fechaDeNacimiento: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    dni: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    contrasena: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    fotoDePerfil: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    },
  });
  
  // Sincroniza los modelos con la base de datos
  (async () => {
    try {
      await sequelize.sync();
      console.log('Tablas sincronizadas con la base de datos.');
    } catch (error) {
      console.error('Error al sincronizar las tablas con la base de datos:', error);
    }
  })();
  
  module.exports = {
    sequelize,
    User,
  };