import { ObjectId } from "mongodb";
import mongoose, { Model } from "mongoose";
import { IProduct } from "../../data-acces/productSchema/product-schema";

export class GetProductById{
    constructor (private readonly productModel: Model<IProduct>){}

    async execute(id:ObjectId): Promise<IProduct | null>{
        const product: IProduct | null = await this.productModel.findById(new mongoose.Types.ObjectId(id))
        return product
    }
}