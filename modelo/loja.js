const Sequelize= require('sequelize');
const database = require ("./db");

const Loja = database.define( 'loja' ,{ 
      id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING, 
        allowNull: false
       },
        produto: {
        type: Sequelize.STRING, 
        allowNull: false
       },
       categoria: {
        type: Sequelize.STRING, 
        allowNull: false
       }
    
    }) 