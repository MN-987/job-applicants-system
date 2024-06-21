const Joi = require('joi');

// Define Joi schema
const validateCandidateApply = joi.object().required().keys({
firstName:Joi.string().min(3).max(12).trim().required(),
  lastName:Joi.string().min(3).max(12).trim().required(),
  phoneNumber: Joi.string().optional(),
  email: Joi.string().email().required(),
  callTime: Joi.string().optional(),
  linkedInProfile: Joi.string().uri(),
  githubProfile: Joi.string().uri(),
  comment: Joi.string().required()
});


const validateCandidateUpdate = Joi.object().required().keys({
firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  phoneNumber: Joi.string().pattern(new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')).optional(),
  email: Joi.string().email().required(),
  bestCallTime : Joi.string().optional(),
  linkedInUrl : Joi.string().uri().optional(),
  githubUrl   : Joi.string().uri().optional(),
  comment: Joi.string().optional()
}
)
module.exports = {validateCandidateApply};