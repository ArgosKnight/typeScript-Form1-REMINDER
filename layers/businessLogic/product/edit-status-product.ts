import { Model } from "mongoose";
import { IProduct } from "../../data-acces/productSchema/product-schema";


export class EditProductByStatus{
    constructor (private readonly productModel: Model<IProduct>){}
 
    async execute(id: string, isActive: boolean): Promise<IProduct | null> {
        const product: IProduct | null = await this.productModel.findByIdAndUpdate(
          id,
          { isActive },
          { new: true }
        );
        return product;
      }
}