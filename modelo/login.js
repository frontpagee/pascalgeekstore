const Sequelize= require('sequelize');
const database = require ("./db");

const Login = database.define( 'perfil' ,{ 
      id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nomedeusuario: {
        type: Sequelize.STRING, 
        allowNull: false
       },
       senha: {
        type: Sequelize.STRING, 
        allowNull: false
       }})

       module.exports = Login;