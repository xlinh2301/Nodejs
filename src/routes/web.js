// xử lý yêu cầu

const express = require('express');
const { getHomepage, getHoiDanIT, postCreateUser, getCreatePage } = require('../controllers/HomeController.js'); // Fix the casing of the import statement
const router = express.Router();

router.get('/', getHomepage)
router.get('/hoidanit', getHoiDanIT)
router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser)

module.exports = router