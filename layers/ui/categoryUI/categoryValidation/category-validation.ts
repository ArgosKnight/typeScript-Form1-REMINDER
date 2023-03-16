import ajvInstance from "../../utils/ajvInstance";

const categorySchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
  required: ['name'],
  additionalProperties: false,
};

const validateCategory = ajvInstance.compile(categorySchema);

export { validateCategory };

