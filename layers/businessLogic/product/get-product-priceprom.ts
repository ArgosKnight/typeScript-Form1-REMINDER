import { Model } from "mongoose";
import { IProduct } from "../../data-acces/productSchema/product-schema";

export class PromPriceProduct{
    constructor (private readonly productModel: Model<IProduct>){}

    async execute(): Promise<{ avgPrice: number }>{
        const result = await this.productModel.aggregate([{ 
            $group: { 
                _id: 'null', 
                avgPrice: { $avg: '$price' } }
             }]).exec();
        return result[0];
    }
}
