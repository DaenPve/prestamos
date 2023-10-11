const { Router } = require('express');
const router = Router();

const { getPrestamos } = require('../controllers/index.controller') 

router.get('/getPrestamos', getPrestamos);

module.exports = router;