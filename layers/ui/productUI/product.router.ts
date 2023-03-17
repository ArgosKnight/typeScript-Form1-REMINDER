import express from "express";

import { IProduct, Product } from "../../data-acces/productSchema/product-schema";
import { ListProducts } from "../../businessLogic/product/list-product";
import { GetProductById } from "../../businessLogic/product/get-products-id";
import { PromPriceProduct } from "../../businessLogic/product/get-product-priceprom";
import { AddProduct } from "../../businessLogic/product/add-product";
import { DeleteProdcut } from "../../businessLogic/product/delete-product";
import { EditProductById } from "../../businessLogic/product/edit-id-product";
import { EditProductByPrice } from "../../businessLogic/product/edit-price-product";
import { EditProductByStatus } from "../../businessLogic/product/edit-status-product";

import { ICategory, Categoria } from "../../data-acces/categorySchema/category-schema";
import { stringToObjectId } from "../utils/stringToObjectId";

import { validEditProduct } from "./productValidation/edit-validation";
import { validateProduct } from "./productValidation/product-validation";
import { validPriceProduct } from "./productValidation/price-validation";
import { validStatusProdcut } from "./productValidation/status-validation";
import validateSchemaMiddleware from "../utils/validMiddleware";

export const productRouter = express.Router()

productRouter.get('/', async (req, res, next) => {
    try {
        const estado = req.query.isActive === 'true' ? true : req.query.isActive === 'false' ? false : undefined;
        const products: IProduct[] = await new ListProducts(Product).execute(estado);
        res.send(products);
    } catch (err) {
        next(err);
    }
});

productRouter.get('/prom-price', async (req, res, next) => {
    try {
        const promPrice = await new PromPriceProduct(Product).execute();
        res.json({ avgPrice: promPrice.avgPrice });
    } catch (err) {
        next(err);
    }
});

productRouter.get('/:id', async (req, res, next) => {
    try {
        const id = stringToObjectId(req.params.id);
        const product: IProduct | null = await new GetProductById(Product).execute(id)
        res.send(product)
    } catch (err) {
        next(err)
    }
})

productRouter.post('/add', validateSchemaMiddleware(validateProduct),async (req, res, next) => {
    try {
        const { name, brand, bardCode, description, keywords, price, isActive, category } = req.body;
        const product: IProduct = await new AddProduct(Product, Categoria).execute(name, brand, bardCode, description, keywords, new Date(), new Date(), price, isActive, category);
        res.send(product); 
    } catch (err) {
        next(err);
    }
});

productRouter.put('/edit/:id', validateSchemaMiddleware(validEditProduct),async (req, res, next) => {
    try {
        const productId = req.params.id
        const updatedProduct = req.body
        const product: IProduct | null = await new EditProductById(Product).execute(productId, updatedProduct);
        if (!product) {
            return res.status(404).json({ message: 'PRODUCT NOT FOUND' })
        }
        console.log(validEditProduct)
        console.log(productId)
        console.log(updatedProduct)
        return res.json(product)
    } catch (err) {
        next(err)
    }
});

productRouter.put('/:id/price',validateSchemaMiddleware(validPriceProduct) ,async (req, res, next) => {
    try {  
        const productId = req.params.id;
        const newPrice = req.body.price;
        const product: IProduct | null = await new EditProductByPrice(Product).execute(productId, newPrice);
        if (!product) {
            return res.status(404).send({ message: 'PRODUCT NOT FOUND' })
        }
        res.send(product)
    } catch (err) {
        next(err)
    }
})


productRouter.put('/:id/status',validateSchemaMiddleware(validStatusProdcut) ,async (req, res, next) => {
    try {
        const productId = req.params.id;
        const isActive = req.body.isActive;
        const product: IProduct | null = await new EditProductByStatus(Product).execute(productId, isActive);
        if (!product) {
            return res.status(404).send({ message: ' PRODUCT NOT FOUND' })
        }
        res.status(200).send(product)
    } catch (err) {
        next(err)
    }
})

productRouter.delete('/:id', async (req, res, next) => {
    try {
        const id = stringToObjectId(req.params.id);
        const deletedProduct: IProduct | null = await new DeleteProdcut(Product).execute(id);
        if (!deletedProduct) {
            return res.status(404).send({ message: 'Producto no encontrado' });
        }
        res.status(200).send({ message: 'Producto eliminado correctamente', deletedProduct });
    } catch (err) {
        next(err);
    }
});