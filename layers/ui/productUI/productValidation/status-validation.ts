import ajvInstance from "../../utils/ajvInstance";

const productSchema={
    type:'object',
    properties:{
        isActive:{type:'boolean'}
    },
    required:['isActive'],
    additionalProperties: false
}
const validStatusProdcut = ajvInstance.compile(productSchema)

export { validStatusProdcut }