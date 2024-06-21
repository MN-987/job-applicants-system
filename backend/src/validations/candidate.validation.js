const Joi = require('joi');

// Define the schema for the inner data object for creating a candidate
const candidateDataSchema = Joi.object({
  firstName: Joi.string().min(3).max(12).trim().required(),
  lastName: Joi.string().min(3).max(12).trim().required(),
  phoneNumber: Joi.string().pattern(new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')).optional(),
  email: Joi.string().email().required(),
  bestCallTime: Joi.string().optional(),
  linkedInUrl: Joi.string().uri().optional(),
  githubUrl: Joi.string().uri().optional(),
  comment: Joi.string().required()
});

 const createCandidateSchema = Joi.object({
  type: Joi.string().valid('candidate_application').required(),
  data: candidateDataSchema.required()
});

// const validateCandidateUpdate = Joi.object().required().keys({
// firstName: Joi.string().optional(),
//   lastName: Joi.string().optional(),
//   phoneNumber: Joi.string().pattern(new RegExp('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')).optional(),
//   email: Joi.string().email().required(),
//   bestCallTime : Joi.string().optional(),
//   linkedInUrl : Joi.string().uri().optional(),
//   githubUrl   : Joi.string().uri().optional(),
//   comment: Joi.string().optional()
// }
// )
module.exports = {createCandidateSchema};