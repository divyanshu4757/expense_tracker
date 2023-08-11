
const Sequelize = require('sequelize');
const sequelize = require('../util/database')


const User_details  = sequelize.define('expenses',
{
 id:{
  type:Sequelize.INTEGER,
  primaryKey:true,
  autoIncrement:true ,
  allowNull:false
 },
 amount:Sequelize.INTEGER,
 description:{
  type:Sequelize.STRING,
  allowNull:false
 },
 category:{
  type:Sequelize.STRING,
  allowNull:false
 }
});



module.exports = User_details;