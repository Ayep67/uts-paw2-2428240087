const express = require('express');
const router = express.Router();
const produkController = require('../controllers/produkController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', produkController.getAll);
router.get('/:id', produkController.getById);
router.post('/', cekApiKey, produkController.create);
router.put('/:id', cekApiKey, produkController.update);
router.delete('/:id', cekApiKey, produkController.remove);

module.exports = router;