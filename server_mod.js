//create an app server
var express = require("express");
var app = express();
//set path to the views (template) directory
// configure the app
app.configure(function () {
	app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
//set path to static files
    app.use(express.static(__dirname + '/public'));
});
//handle GET requests on /
app.get('/', function(req, res){res.render('index.jade', {title: 'Awesome'});});

app.listen(8000)
