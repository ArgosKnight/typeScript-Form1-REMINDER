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
exports.categoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const category_schema_1 = require("../../data-acces/categorySchema/category-schema");
const list_category_1 = require("../../businessLogic/category/list-category");
const get_category_by_id_1 = require("../../businessLogic/category/get-category-by-id");
const add_category_1 = require("../../businessLogic/category/add-category");
const stringToObjectId_1 = require("../utils/stringToObjectId");
const category_validation_1 = require("./categoryValidation/category-validation");
const validMiddleware_1 = __importDefault(require("../utils/validMiddleware"));
exports.categoryRouter = express_1.default.Router();
exports.categoryRouter.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categorias = yield new list_category_1.ListCategories(category_schema_1.Categoria).execute();
        res.send(categorias);
    }
    catch (err) {
        next(err);
    }
}));
exports.categoryRouter.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, stringToObjectId_1.stringToObjectId)(req.params.id);
        const categorias = yield new get_category_by_id_1.GetCategoryById(category_schema_1.Categoria).execute(id);
        if (!categorias) {
            res.status(400).send('Category not found');
        }
        else {
            res.send(categorias);
        }
    }
    catch (err) {
        next(err);
    }
}));
exports.categoryRouter.post('/add', (0, validMiddleware_1.default)(category_validation_1.validateCategory), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const newCategory = yield new add_category_1.AddCategory(category_schema_1.Categoria).execute(name);
        res.send(newCategory);
    }
    catch (err) {
        next(err);
    }
}));
