"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./data-acces/db/db");
const category_router_1 = require("./ui/categoryUI/category.router");
const product_router_1 = require("./ui/productUI/product.router");
const app = (0, express_1.default)();
const api = (0, express_1.Router)();
app.use(body_parser_1.default.json());
(0, db_1.connectDB)();
api.use('/category', category_router_1.categoryRouter);
api.use('/products', product_router_1.productRouter);
app.use('/api', api);
app.use((error, req, res, next) => {
    console.log(error);
    console.log(error.statusCode, res.statusCode);
    const status = error.statusCode || 500;
    const message = error.message || "ERROR EN EL INTERIOR DEL SERVIDOR";
    res.status(status).json({ code: status, message: message });
});
app.listen(3000, () => {
    console.log('SERVIDOR ON, LETS GO !!! ');
});
