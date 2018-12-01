var mongoose = require("mongoose");
var registroModel = require("../models/registro");

module.exports.getAll = function(req, res){
    registroModel.find({},function(err,registros){
        if(err){
            res.status(500);
            return res.json({"Ok": false, error: err});
        }
        else{
            res.json(registros);
        }
    });
};

module.exports.getOne = function(req, res){
    if(req.params.id){
        registroModel.findOne(req.params.id, function(err, registro){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json(registro);
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
};

module.exports.Create = function(req, res){
    var nuevo = new registroModel({nombre : req.body.nombre, especialidad : req.body.especialidad, casos: req.body.casos});
    nuevo.save(function(err, guardado){
        if(err){
            res.status(500);
            return res.json({"Ok": false, error: err});
        }
        else{
            res.json(guardado);
        }
    });
}

module.exports.Update = function(req, res){   
    if(req.params.id){
        var update =  {nombre : req.body.nombre, especialidad : req.body.especialidad, casos: req.body.casos};
        registroModel.findByIdAndUpdate(req.params.id, update,function(err,registro){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json({"Ok": true, old: registro, new: update});
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
}

module.exports.Delete = function(req, res){
    if(req.params.id){
        registroModel.findByIdAndDelete(req.params.id,function(err,registro){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json({"Ok": true, deleted: registro});
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
}
