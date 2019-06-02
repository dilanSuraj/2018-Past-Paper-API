const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const EXPRESSPORT = 4001;
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST,GET,PUT,DELETE,PATCH,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', routes);

app.listen(EXPRESSPORT, ()=>{
   console.log("Express Server is now listening to the port "+EXPRESSPORT);
});
