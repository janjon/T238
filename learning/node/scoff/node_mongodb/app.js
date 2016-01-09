var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var path = require('path');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(session);
var logger = require('morgan');
var serveStatic = require('serve-static');
var multipart = require('connect-multiparty');
var fs = require('fs');

var port = process.env.PORT || 3000;
var app = express();
var dbUrl = 'mongodb://localhost/imooc';

mongoose.connect(dbUrl);
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs
      .readdirSync(path)
      .forEach(function(file) {
            var newPath = path + '/' + file
            var stat = fs.statSync(newPath)
            if (stat.isFile()) {
                if (/(.*)\.(js|coffee)/.test(file)) {
                    require(newPath);
                }
            }
            else if (stat.isDirectory()) {
                walk(newPath);
            }
        })
}
walk(models_path);
app.set('views', './app/views/pages');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(multipart());
app.use(session({
    secret: 'imooc',
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({
        url: dbUrl,
        collection: 'session'
    })
}));

var env = process.env.NODE_ENV || 'development';
if ('development' === env) {
    app.set('showStackError', true);
    app.use(logger(':method :url :status'));
    app.locals.pretty = true;
    //mongoose.set('debug',true);
}
app.locals.moment = require('moment');
app.use(serveStatic(path.join(__dirname, 'node_modules')));
app.use(serveStatic(path.join(__dirname, 'public')));
app.listen(port);

require('./config/routes')(app);

console.log('服务器启动: ' + port);

