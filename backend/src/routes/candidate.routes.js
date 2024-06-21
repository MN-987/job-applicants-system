const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidate.controller');
const {asyncHandler} = require('../utils/errorHandling.js');
const {validation} = require('../validations/validation');
const {createCandidateSchema} = require('../validations/candidate.validation');

router.route('/apply').post(
    validation(createCandidateSchema),
    asyncHandler(candidateController.apply)
);

module.exports = router;