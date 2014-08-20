var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var data = require('./data.js');
var claim = require('./claim.js');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var server = require('http').createServer(app);
server.listen(process.env.PORT || 5000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });



// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.send({ message: 'hooray! welcome to our api!' });	
});
	
router.route('/resources/:siteId&:org')
	.get(function(req,res) {
		res.send(data.getData(req.params.siteId,req.params.org));
		res.end();
	});
	
	router.route('/resources/claim/:siteId&:org')
	.get(function(req,res) {
		res.send(claim.getData(req.params.siteId,req.params.org));
		res.end();
	});
	
	router.route('/resources/:siteId')
	.get(function(req,res) {
		res.send(data.getData(req.params.siteId));
		res.end();
	});
	


	
//Route last login
router.route('/login')
	.get(function(req,res) {
	
		res.send(JSON.stringify([
		{
		"userId" : "test name",
		"lastLogin" : "06-02-2014 04:14 pm est"
		}
		]));
		res.end();
	});
	
router.route('/org/:org')
	.get(function(req,res) {
		if(req.params.org === "org1")
		{
			res.send(JSON.stringify([
			{
				"orgId" : "org1",
				"sites" : [11]
			}
			]));
			res.end();
		}
		else if(req.params.org === "org2"){
			res.send(JSON.stringify([
			{
				"orgId" : "org2",
				"sites" : [11,12]
			}
			]));
			res.end();
		}
		
	});

// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

//app.use('/', routes);
//app.use('/users', users);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
