var express = require("express");
var app = express(); 
var fortune = require('./lib/fortune.js');

var handlebars = require("express-handlebars").create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use( (req, res, next) => {
		res.locals.showTests == app.get('env') !== 'production' && req.query.test === "1";
		next();
} )

app.get('/', (req,res) => {
	res.render('home');
});

app.get('/about', (req, res) => {
	res.render('about', {fortune: fortune.IndFort()});
});

app.use((req, res, next) => {
	res.status(404);
	res.render('404');
});

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), () => {
	console.log('Express запущен на http://localhost:' + app.get('port') + '; нажмите Ctrl+C для завершения.')});
