const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const user = sequelize.define('user', {
  // Definición de las columnas de la tabla
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaDeNacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fotoDePerfil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
 roleId: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

module.exports = Usuario;
