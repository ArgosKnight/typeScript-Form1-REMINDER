import Ajv from "ajv";

const ajvInstance = new Ajv()

export const validateSchema = (schema: any) => {
  return ajvInstance.compile(schema);
};

export default ajvInstance;