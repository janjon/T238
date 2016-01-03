var Category = require('../models/category');

exports.new = function(req,res) {
    res.render('category_admin',{
        title:'imooc 后台分类录入页',
        category:{}
    });
}

exports.save = function(req,res) {
    var _category = req.body.category;
    var category = new Category(_category);
    category.save(function(err,category) {
        if(err){
            console.log(err);
        }
        
        res.redirect('/admin/category/list');
    });
}

// category list page
exports.list = function (req, res) {

    Category.fetch(function (err, categorys) {
        if (err) {
            console.log(err);
        }
        res.render('categoryList', {
            title: 'immoc 分类列表页',
            categorys: categorys
        });
    });
};