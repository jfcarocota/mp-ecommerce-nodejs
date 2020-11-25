var express = require('express');
var exphbs  = require('express-handlebars');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const mercadopago = require('mercadopago');

dotenv.config();

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN
});

const port = process.env.PORT

var app = express();

app.use(cors());

app.use(bodyParser.json());
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));
 
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', (req, res)=> res.render('home'));

app.get('/detail', (req, res)=> res.render('detail', req.query));

app.post('/notifications', (request, response) => {
    const data = request.body;
    /*mercadopago.ipn.manage(request)
    .then(data => response.render('jsonobject',{
        resul: data
    }));*/
    response.send(data);
});

app.post('/checkout', (request, response) =>{
    const preference = request.body;

    mercadopago.preferences.create(preference)
    .then(res => response.send(res.body));

    //response.send(taco);
});


app.listen(port);