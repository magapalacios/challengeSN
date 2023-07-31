const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const role = sequelize.define("role", {
  
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  id: {
    type: type.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
});

module.exports = role;
