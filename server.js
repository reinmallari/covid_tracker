const express = require('express')
const bodyParser = require("body-parser");
const ejs = require("ejs");
const engine = require("ejs-mate");
const fetch = require('node-fetch');

const app = express();

app.use(express.static('public'));
app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/dashboard")(app,fetch);

app.listen(3000,function(){
	console.log('App is running on port 3000');
})
