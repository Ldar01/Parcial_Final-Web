var mongoose = require('mongoose');
var registro = new mongoose.Schema({
    nombre : String,
    especialidad : String,
    casos: String
});

module.exports = mongoose.model("registro", registro);