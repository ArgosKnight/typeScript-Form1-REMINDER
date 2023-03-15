"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIdTransform = void 0;
const mongodb_1 = require("mongodb");
class ObjectIdTransform {
    static transformToObject(id) {
        return mongodb_1.ObjectId.createFromHexString(id);
    }
    static transformToString(id) {
        return id.toHexString();
    }
}
exports.ObjectIdTransform = ObjectIdTransform;
