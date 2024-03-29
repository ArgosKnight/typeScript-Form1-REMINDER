"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_schema_1 = require("../data-acces/product-schema");
const list_product_1 = require("../businessLogic/product/list-product");
const get_products_id_1 = require("../businessLogic/product/get-products-id");
const get_product_priceprom_1 = require("../businessLogic/product/get-product-priceprom");
const add_product_1 = require("../businessLogic/product/add-product");
const delete_product_1 = require("../businessLogic/product/delete-product");
const edit_id_product_1 = require("../businessLogic/product/edit-id-product");
const edit_price_product_1 = require("../businessLogic/product/edit-price-product");
const edit_status_product_1 = require("../businessLogic/product/edit-status-product");
const stringToObjectId_1 = require("./utils/stringToObjectId");
exports.productRouter = express_1.default.Router();
exports.productRouter.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estado = req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined;
        const products = yield new list_product_1.ListProducts(product_schema_1.Product).execute(estado);
        res.send(products);
    }
    catch (err) {
        next(err);
    }
}));
exports.productRouter.get('/prom-price', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promPrice = yield new get_product_priceprom_1.PromPriceProduct(product_schema_1.Product).execute();
        res.json({ avgPrice: promPrice.avgPrice });
    }
    catch (err) {
        next(err);
    }
}));
exports.productRouter.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, stringToObjectId_1.stringToObjectId)(req.params.id);
        const product = yield new get_products_id_1.GetProductById(product_schema_1.Product).execute(id);
        res.send(product);
    }
    catch (err) {
        next(err);
    }
}));
exports.productRouter.post('/add', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, brand, bardCode, description, keywords, createAt, updateAt, price, isActive } = req.body;
        const product = yield new add_product_1.AddProduct(product_schema_1.Product).execute(name, brand, bardCode, description, keywords, createAt, updateAt, price, isActive);
        res.send(product);
    }
    catch (err) {
        next(err);
    }
}));
exports.productRouter.put('/edit/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const updatedProduct = req.body;
        const product = yield new edit_id_product_1.EditProductById(product_schema_1.Product).execute(productId, updatedProduct);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.json(product);
    }
    catch (err) {
        next(err);
    }
}));
exports.productRouter.put('/:id/price', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const newPrice = req.body.price;
        const product = yield new edit_price_product_1.EditProductByPrice(product_schema_1.Product).execute(productId, newPrice);
        if (!product) {
            return res.status(404).send({ message: 'Producto no encontrado' });
        }
        res.send(product);
    }
    catch (err) {
        next(err);
    }
}));
exports.productRouter.put('/:id/status', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.id;
        const isActive = req.body.isActive;
        const product = yield new edit_status_product_1.EditProductByStatus(product_schema_1.Product).execute(productId, isActive);
        if (!product) {
            return res.status(404).send({ message: 'Producto no encontrado' });
        }
        res.status(200).send(product);
    }
    catch (err) {
        next(err);
    }
}));
exports.productRouter.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, stringToObjectId_1.stringToObjectId)(req.params.id);
        const deletedProduct = yield new delete_product_1.DeleteProdcut(product_schema_1.Product).execute(id);
        if (!deletedProduct) {
            return res.status(404).send({ message: 'Producto no encontrado' });
        }
        res.status(200).send({ message: 'Producto eliminado correctamente', deletedProduct });
    }
    catch (err) {
        next(err);
    }
}));
