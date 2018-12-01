var express = require('express');
var router = express.Router();
var registroController = require("../controllers/registroController");

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/', registroController.getAll);
router.get('/:id',registroController.getOne);
router.post('/',registroController.Create);
router.put('/:id', registroController.Update);
router.delete('/:id',registroController.Delete);


module.exports = router;
