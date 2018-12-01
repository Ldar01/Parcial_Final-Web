var mongoose = require("mongoose");
var registroModel = require("../models/registro");

module.exports.getAll = function(req, res){
    registroModel.findOne({},function(err,registros){

    });
}
