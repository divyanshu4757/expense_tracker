
const Sequelize = require('sequelize');
const sequelize = require('../util/database')


const Candy_details  = sequelize.define('Candy_details',
{
 id:{
  type:Sequelize.INTEGER,
  primaryKey:true,
  autoIncrement:true ,
  allowNull:false
 },
 name:Sequelize.STRING,
 price:Sequelize.INTEGER,
 description:{
  type:Sequelize.STRING,
  allowNull:false
 },
 quantity:{
  type:Sequelize.INTEGER,
  allowNull:false
 }
});



module.exports = Candy_details;