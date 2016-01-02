var EventEmitter = require('events').EventEmitter;

var left = new EventEmitter();

left.on('求安慰',function (who) {
    console.log('给 '+ who+' 倒水');
});

left.emit('求安慰','栗占州')