"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const ajv_1 = __importDefault(require("ajv"));
const ajvInstance = new ajv_1.default();
const validateSchema = (schema) => {
    return ajvInstance.compile(schema);
};
exports.validateSchema = validateSchema;
exports.default = ajvInstance;
