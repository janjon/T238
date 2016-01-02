var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(session);
var logger = require('morgan');
var port = process.env.PORT || 3000;
var app = express();
var dbUrl = 'mongodb://localhost/imooc';

mongoose.connect(dbUrl);

app.set('views', './app/views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret:'imooc',
    store:new mongoStore({
        url: dbUrl,
        collection: 'session'
    })
}));

if('development' === app.get('env')){
    app.set('showStackError',true);
    app.use(logger(':method :url :status'));
    app.locals.pretty = true;
    mongoose.set('debug',true);
}
app.locals.moment = require('moment');
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);

require('./config/routes')(app);

console.log('服务器启动: ' + port);

