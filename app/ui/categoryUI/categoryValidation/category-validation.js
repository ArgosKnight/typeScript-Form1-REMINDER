"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = void 0;
const ajvInstance_1 = __importDefault(require("../../utils/ajvInstance"));
const categorySchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
    },
    required: ['name'],
    additionalProperties: false,
};
const validateCategory = ajvInstance_1.default.compile(categorySchema);
exports.validateCategory = validateCategory;
