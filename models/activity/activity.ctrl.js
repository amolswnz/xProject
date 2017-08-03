var mongoose = require('mongoose');
//Load all your models
var Activity = require('./activity.model.js');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('Activity');

module.exports = {
  // Get all
  findAll: function(req, res) {
    Activity.find({}, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  // Find one by id
  findOne: function(req, res) {
    Activity.findById(req.params.id, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findAllByCity: function(req, res) {
    Activity.find({
      cityName: req.params.city
    }, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findOnlyCities: function(req, res) {
    Activity.distinct("cityName", function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findX: function(req, res) {
    console.log(req.params.abc, req.params.def);
    res.json({
      a: req.params.abc,
      b: req.params.def
    });
  }

};
