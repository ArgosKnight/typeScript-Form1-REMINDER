"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validEditProduct = void 0;
const ajvInstance_1 = __importDefault(require("../../utils/ajvInstance"));
const productSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        brand: { type: 'string' },
        bardCode: { type: 'string' },
        descriptrion: { type: 'string' },
        keywords: { type: 'array', items: { type: 'string' } },
        price: { type: 'number' },
        isActive: { type: 'boolean' }
    },
    required: [],
    additionalProperties: true
};
const validEditProduct = ajvInstance_1.default.compile(productSchema);
exports.validEditProduct = validEditProduct;
