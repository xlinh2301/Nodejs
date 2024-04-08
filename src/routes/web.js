// xử lý yêu cầu

const express = require('express');
const { getHomepage, getHoiDanIT, postCreateUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage)
router.get('/hoidanit', getHoiDanIT)

router.post('/create-user', postCreateUser)

module.exports = router