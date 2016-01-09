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

// index page
exports.search = function (req, res) {
    var catId = req.query.cat;
    var page = parseInt(req.query.p, 10) || 0;
    var q = req.query.q;
    var index = page * 2;
    var count = 2

    if (catId) {
        Category
            .find({ _id: catId })
            .populate({ path: 'movies', select: 'title poster' })
            .exec(function (err, categorys) {
                if (err) {
                    console.log(err);
                }
                var category = categorys[0] || {};
                var movies = category.movies || []
                var results = movies.slice(index, index + count)
                res.render('results', {
                    title: 'immoc 结果页',
                    keyword: category.name,
                    currentPage: (page + 1),
                    query: 'cat=' + catId,
                    totalPage: Math.ceil(movies.length / count),
                    movies: results
                });
            });
    }else{
        Movie
            .find({title: new RegExp(q+'.*','i')})
            .exec(function(err,movies) {
                if(err){
                    console.log(err);
                }
                var results = movies.slice(index, index + count)
                res.render('results', {
                    title: 'immoc 结果页',
                    keyword: q,
                    currentPage: (page + 1),
                    query: 'cat=' + catId,
                    totalPage: Math.ceil(movies.length / count),
                    movies: results
                });
            });
    }
};