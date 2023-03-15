"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = void 0;
const ajv_1 = __importDefault(require("ajv"));
const ajv = new ajv_1.default();
const productSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        brand: { type: 'string' },
        barcode: { type: 'string' },
        description: { type: 'string' },
        keywords: { type: 'array', items: { type: 'string' } },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
        price: { type: 'number' },
        isActive: { type: 'boolean' },
        category: { type: 'string' }
    },
    required: ['name', 'brand', 'barcode', 'price', 'category'],
    additionalProperties: false,
};
const validateProduct = ajv.compile(productSchema);
exports.validateProduct = validateProduct;
