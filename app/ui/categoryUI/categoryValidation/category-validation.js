"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = void 0;
const ajv_1 = __importDefault(require("ajv"));
const ajv = new ajv_1.default();
const categorySchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
    },
    required: ['name'],
    additionalProperties: false,
};
const validateCategory = ajv.compile(categorySchema);
exports.validateCategory = validateCategory;
