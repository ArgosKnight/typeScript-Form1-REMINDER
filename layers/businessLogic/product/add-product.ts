import { Model } from "mongoose";
import { IProduct } from "../../data-acces/productSchema/product-schema";
import { ICategory, Categoria } from "../../data-acces/categorySchema/category-schema";

export class AddProduct{
    constructor (private readonly productModel: Model<IProduct>, 
        private readonly categoryModel: Model<ICategory>){}
    
    async execute(name: string, brand: string, bardCode: string, description: string, keywords: string[],createAt: Date, updateAt: Date, price: number, isActive: boolean, category?: string ): Promise<IProduct> {
        let productCategory = null;
        if (category) {
            const categoryObj: ICategory | null = await this.categoryModel.findById(category);
            productCategory = categoryObj ? categoryObj._id : null;
        }
        const product: IProduct = await this.productModel.create({
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
    }
}