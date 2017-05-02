const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.use(express.static(__dirname + '/public'));
// set up template
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = 3000;
app.listen(port, () => {
	console.log('the server is now running on port:' + port);
});

app.get('/', (req, res) => {
	console.log('check in from login')
	res.render('index');
	})

