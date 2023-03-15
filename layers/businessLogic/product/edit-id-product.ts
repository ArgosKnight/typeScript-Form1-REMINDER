import { Model } from "mongoose";
import { IProduct } from "../../data-acces/productSchema/product-schema";

export class EditProductById {
    constructor(private readonly productModel: Model<IProduct>) { }

    async execute(productId: string, updatedProduct: Partial<IProduct>): Promise<IProduct | null> {
        const product: IProduct | null = await this.productModel.findByIdAndUpdate(productId, updatedProduct, { new: true });
        return product;
    }
}