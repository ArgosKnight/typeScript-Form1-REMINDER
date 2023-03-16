"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPriceProduct = void 0;
const ajvInstance_1 = __importDefault(require("../../utils/ajvInstance"));
const productSchema = {
    type: 'object',
    properties: {
        price: { type: 'number' }
    },
    required: ['price'],
    additionalProperties: false,
};
const validPriceProduct = ajvInstance_1.default.compile(productSchema);
exports.validPriceProduct = validPriceProduct;
