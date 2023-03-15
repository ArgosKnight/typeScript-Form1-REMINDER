import { ObjectId } from "mongodb";
import mongoose, { Model } from "mongoose";
import { IProduct } from "../../data-acces/productSchema/product-schema";


export class DeleteProdcut{
 constructor (private readonly productModel: Model<IProduct>){}
 
 async execute(id:ObjectId):Promise< IProduct | null>{
    const product: IProduct | null = await this.productModel.findByIdAndDelete(new mongoose.Types.ObjectId(id))
    return product
 }
}
