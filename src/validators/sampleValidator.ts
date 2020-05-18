import { Joi } from 'koa-joi-router';

const sampleValidate = Joi.object({
  _id: Joi.string().required()
});

const anotherSampleValidate = Joi.object({
  _id: Joi.string().required()
});

export { sampleValidate, anotherSampleValidate };
