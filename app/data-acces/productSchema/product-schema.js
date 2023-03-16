"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    id: {
        type: mongodb_1.ObjectId,
        require: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
    },
    bardCode: {
        type: String,
    },
    description: {
        type: String,
    },
    keywords: {
        type: [String],
    },
    createdAt: {
        type: Date, default: Date.now
    },
    updatedAt: {
        type: Date,
    },
    price: {
        type: Number,
    },
    isActive: {
        type: Boolean,
    },
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Categoria',
    }
});
ProductSchema.pre('updateOne', function () {
    this.set({ updatedAt: new Date() }); // Establece la fecha actual en updatedAt
});
const Product = mongoose_1.default.model('products', ProductSchema);
exports.Product = Product;
