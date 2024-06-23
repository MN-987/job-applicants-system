const Joi = require('joi');

// Define the schema for the inner data object for creating a candidate
const candidateDataSchema = Joi.object({
  firstName: Joi.string().min(3).max(12).trim().required(),
  lastName: Joi.string().min(3).max(12).trim().required(),
  phoneNumber: Joi.string(),
  email: Joi.string().email().required(),
  bestCallTime: Joi.string().optional(),
  linkedInUrl: Joi.string().optional(),
  githubUrl: Joi.string().optional(),
  comment: Joi.string().required()
});

 const createCandidateSchema = Joi.object({
  type: Joi.string().valid('candidate_application').required(),
  data: candidateDataSchema.required()
});

 
module.exports = {createCandidateSchema};