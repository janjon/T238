/**
 * DocumentationController
 *
 * @description :: Server-side logic for managing documentations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var path = require('path');
module.exports = {
  create: function(req, res) {
    var documentation = req.body;
    documentation.priority = 1;
    documentation.state = 'disabled';

    Documentation.create(documentation).exec(function(err, created) {
      if (err) return res.serverError(err);
      return res.ok(created);
    });
  },
  upload: function(req, res) {

    var id = req.param('id');
    Documentation.findOne({ id: id })
      .then(function(document) {
        if (!document) {
          console.log(document);
          return res.json(409, { "reason": "duplicated" });
        }

        req.file('file').upload(function whenDone(err, files) {
          if (err) {
            return res.serverError(err);
          }
          // If no files were uploaded, respond with an error.
          if (files.length === 0) {
            return res.badRequest('No file was uploaded');
          }

          var file = files[0];
          console.log(file);
          Documentation.update({ id: id }, { path: file.fd, state: 'enabled', priority: document.priority + 1 }).exec(function(err, updated) {
            if (err) return res.serverError(err);
            return res.json(200, { action: "success" });
          });
        })
      })
      .catch(function(err) {
        console.log(err);
        return res.serverError(err);
      });
  },
  download: function(req, res) {
    Documentation.findOne(req.param('id')).exec(function(err, document) {
      if (err) return res.serverError(err);
      if (!document) return res.notFound();

      // document has no avatar image uploaded.
      // (should have never have hit this endpoint and used the default image)
      if (!document.path) {
        return res.notFound();
      }

      var SkipperDisk = require('skipper-disk');
      var fileAdapter = SkipperDisk();
      fileAdapter.read(document.path)
        .on('error', function(err) {
          return res.serverError(err);
        })
        .pipe(res);
    });
  },
  find: function(req, res) {
    Documentation.find().exec(function(err, documents) {
      if (err) {
        return res.serverError(err);
      }
      return res.ok(documents);
    })
  },
  update: function(req, res) {
    var id = req.param("id");
    var document = req.body;
    if (id) {
      Documentation.findOne({ id: { '!': id }, name: document.name })
        .then(function(findDocument) {
          console.log(findDocument);
          if (findDocument) {
            return res.json(409, { "reason": "duplicated" });
          }

          Documentation.update({ id: id }, document).exec(function(err, updated) {
            console.log(updated);                      
            return res.ok(updated);

          })
        })
        .catch(function(err) {
          console.log(err);
          return res.serverError(err);
        })
    } else {
      return res.ok("Param id or name is null.");
    }
  },
  destroy: function(req, res) {
    var id = req.param("id");
    if (id) {
      Documentation.destroy({ id: id })
        .exec(function(err, deleted) {
          console.log(deleted);
          if (err) return res.serverError(err);
          return res.json(200, { "action": "success" });
        })
    } else {
      return res.ok("Param id or name is null.");
    }
  }
};

