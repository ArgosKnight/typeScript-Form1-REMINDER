import { Model } from "mongoose";
import { IProduct } from "../../data-acces/productSchema/product-schema";


export class AddProduct{
    constructor (private readonly productModel: Model<IProduct>){}
    
    async execute(name: string, brand: string, bardCode: string, description: string, keywords: string[],createAt: Date, updateAt: Date, price: number, isActive: boolean):Promise<IProduct>{
        const product: IProduct = await this.productModel.create({
            name,
            brand,
            bardCode,
            description,
            keywords,
            createAt, 
            updateAt,
            price,
            isActive
        });
        return product;
    }
}