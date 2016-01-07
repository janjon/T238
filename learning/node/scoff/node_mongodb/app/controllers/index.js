var Movie = require('../models/movie');
var Category = require('../models/category');
// index page
exports.index = function (req, res) {
    Category
        .find({})
        .populate({ path: 'movies', options: { limit: 5 } })
        .exec(function (err, categorys) {
            if (err) {
                console.log(err);
            }
            
            console.log(categorys);
            res.render('index', {
                title: 'immoc 首页',
                categorys: categorys
            });
        });
};