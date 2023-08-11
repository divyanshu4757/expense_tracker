const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete' , 'root' ,'ak475767' ,{dialect:'mysql' , host:'localhost'});

module.exports = sequelize;