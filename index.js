// what have we done 
// we have imorted our external / global modules

const hbs = require('express-handlebars')
// express and handlebars being used together 
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// Testing Git Hub Comment 

const app = express();

const routes = require('./routes/routes')

// this if for a local module/ import 
// const getWeather = require('./lib/getWeather');

// this is saying that we are using the path of public to start our server journey 
//this will be combined with out index.js 
// it will pretent that any js / css file linked is in the / public folder once running.
// __ dirname / __filename will do different things 
// will stay here unless you direct me 


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({entended: false}))
app.use(bodyParser.json())

app.use('/', routes);

/// using a static path and saying that this path will never change 

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));


app.set('view engine', 'hbs');
    // this has things missing!!!! check here to make work 


// app.get('/', (req, res) => {
//     res.render('index');
// })


// /// we are waiting for get weather to resond before it proceeds, we do not know how long untill it moves to the next 
// app.get('/', async(req, res) =>{
//     // we are setting it as a veriable so we can use it later
//     let data = await getWeather();
//     let temp = data.list[0].main.temp;
//     let wind = data.list[0].main.wind;
//     // console log is to see how the api looks to target the data 
//     console.log(data)
//     // accessing the data from the api with correct calls 
//     res.render('index', {temp, wind});
//     // redering index.hbs -n which in turn, brings the html from layout.hbs
//     // and then pulls in temp and wind from the api 
// });

// app.post('/' , async(req, res) => {
//     let location = req.body.location;
//     console.log(location)
//     let data = await getWeather();

//     let temp = data.list[0].main.temp;
//     let humidity = data.list[0].main.humidity;

//     res.render('index', {data: {temp, humidity}})
// });




app.listen(3000, () => {
    console.log('server on 3000.')
})






// app.get('/', (req, res) =>{
//     res.sendFile(__dirname + '/index.html');
// }
