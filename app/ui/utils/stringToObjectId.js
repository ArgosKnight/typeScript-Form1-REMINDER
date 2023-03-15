"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToObjectId = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
function stringToObjectId(id) {
    if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
        const error = new Error('Invalid ID');
        error.statusCode = 400;
        throw error;
    }
    return new mongodb_1.ObjectId(id);
}
exports.stringToObjectId = stringToObjectId;
