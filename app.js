const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');




const routes = require('./routes/route');


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(routes);























sequelize.sync().then((result)=>{
    app.listen(5000);
})
.catch(error=>{
    console.log(error);
})
.dataValues