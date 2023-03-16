import ajvInstance from "../../utils/ajvInstance";

const productSchema={
    type: 'object',
    properties:{
        price:{type:'number'}
    },
    required:['price'],
    additionalProperties: false,
}
const validPriceProduct = ajvInstance.compile(productSchema)

export { validPriceProduct }