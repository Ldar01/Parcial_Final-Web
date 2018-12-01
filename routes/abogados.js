var express = require('express');
var router = express.Router();
var registroController = require("../controllers/registroController");

router.get('/', registroController.getAll);
router.get('/:id',registroController.getOne);
router.post('/',registroController.Create);
router.put('/:id', registroController.Update);
router.delete('/:id',registroController.Delete);

module.exports = router;