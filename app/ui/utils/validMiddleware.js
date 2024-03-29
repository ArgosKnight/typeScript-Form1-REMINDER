"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ajv_1 = __importDefault(require("ajv"));
const ajv = new ajv_1.default();
function validateSchemaMiddleware(schemaValidator) {
    return (req, res, next) => {
        const isValid = schemaValidator(req.body);
        if (isValid) {
            next();
        }
        else {
            res.status(400).json({ error: 'Invalid data' });
        }
    };
}
exports.default = validateSchemaMiddleware;
