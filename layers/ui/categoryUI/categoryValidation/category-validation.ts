import Ajv from 'ajv';

const ajv = new Ajv();

const categorySchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
  required: ['name'],
  additionalProperties: false,
};

const validateCategory = ajv.compile(categorySchema);

export { validateCategory };

