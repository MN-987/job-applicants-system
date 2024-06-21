const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');
const {asyncHandler} = require('../utils/errorHandling.js');


router.route('/apply').post(asyncHandler(candidateController.apply));

module.exports = router;