import { Model } from "mongoose";
import { IProduct } from "../../data-acces/productSchema/product-schema";

export class ListProducts{
    constructor(private readonly productModel: Model<IProduct>){}

    async execute(isActive?: boolean): Promise<IProduct[]> {
        const query = isActive !== undefined ? { isActive: isActive } : {};
        const products: IProduct[] = await this.productModel.find(query);
        return products;
  }
}