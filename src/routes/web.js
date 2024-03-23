const express = require('express');
const { getHomepage, getHoiDanIT } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage)
router.get('/hoidanit', getHoiDanIT)

module.exports = router