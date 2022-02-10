const express = require('express');

const router = express.Router();
const { saveUrl, visitUrl } = require('../controllers/urlController');
const checkUrl = require('../middlewares/checkUrl')

router.route('/').post(checkUrl, saveUrl);
router.route('/:shortUrl').get(visitUrl);

module.exports = router 