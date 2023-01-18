const Sequelize= require('sequelize');
const database = require ("./db");

const Tarefas = database.define( 'perfil' ,{ 
      id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      categoriadatarefa: {
        type: Sequelize.STRING, 
        allowNull: false
       }})

       module.exports = Tarefas;