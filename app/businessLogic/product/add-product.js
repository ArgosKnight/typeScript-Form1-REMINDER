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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddProduct = void 0;
class AddProduct {
    constructor(productModel, categoryModel) {
        this.productModel = productModel;
        this.categoryModel = categoryModel;
    }
    execute(name, brand, bardCode, description, keywords, createAt, updateAt, price, isActive, category) {
        return __awaiter(this, void 0, void 0, function* () {
            let productCategory = null;
            if (category) {
                const categoryObj = yield this.categoryModel.findById(category);
                productCategory = categoryObj ? categoryObj._id : null;
            }
            const product = yield this.productModel.create({
                name,
                brand,
                bardCode,
                description,
                keywords,
                price,
                isActive,
                category: productCategory
            });
            return product;
        });
    }
}
exports.AddProduct = AddProduct;
