const express = require('express');
const cors = require('cors');
const app = express();
const mainBase = require('./config/base');
const routesApi = require('./api/routes');


mainBase();
require('dotenv').config();


app.use(express.json());

app.use(cors());
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 5288;


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'pug');



/*Usnig routes*/
app.use('/transporter', routesApi);

app.get('/', (req,res)=>{
    res.render(__dirname + `/views/index`);
 });



 
 app.listen(port, ()=>{
    console.log(`app is running on port ${port}`);
});