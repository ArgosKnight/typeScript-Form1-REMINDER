import ajvInstance from "../../utils/ajvInstance";

const productSchema={
    type:'object',
    properties:{
        name:{type:'string'},
        brand:{type:'string'},
        bardCode:{type:'string'},
        description:{type:'string'},
        keywords:{type:'array', items:{type:'string'}},
        price:{type:'number'},
        isActive:{type:'boolean'}
    },
    required:[],
    additionalProperties:true
}
const validEditProduct = ajvInstance.compile(productSchema);

export { validEditProduct }