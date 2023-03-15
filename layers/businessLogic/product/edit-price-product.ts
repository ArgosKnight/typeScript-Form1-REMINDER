import { Model } from "mongoose";
import { IProduct } from "../../data-acces/productSchema/product-schema";


export class EditProductByPrice{
    constructor (private readonly productModel: Model<IProduct>){}

    async execute(id: string, newPrice: number): Promise<IProduct | null>{
        const product: IProduct | null = await this.productModel.findByIdAndUpdate(
            id, 
            { price: newPrice },
            { new: true }
        );
        return product;
    }
}