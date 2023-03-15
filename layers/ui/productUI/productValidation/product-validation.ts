import Ajv from "ajv"

const ajv = new Ajv()

const productSchema ={
    type: 'object',
    properties:{
        id: { type: 'string'},
        name: {type: 'string'},
        brand: {type: 'string'},
        barcode: {type: 'string'},
        description: {type: 'string'},
        keywords: {type: 'array', items: {type: 'string'}},
        createdAt: {type: 'string', format: 'date-time'},
        updatedAt: { type: 'string', format: 'date-time'},
        price: {type:'number'},    
        isActive: {type: 'boolean'},
        category: {type: 'string'}
    },
    required:['name', 'brand', 'barcode', 'price', 'category'],
    additionalProperties: false,
};


const validateProduct = ajv.compile(productSchema);

export { validateProduct }