import { Model } from "mongoose";
import { ICategory } from "../../data-acces/categorySchema/category-schema";

export class AddCategory{
    constructor(private readonly categoryModel: Model<ICategory>) {}
      
    async execute(name: string): Promise<ICategory> {
        const category: ICategory = await this.categoryModel.create({ name });
        return category;
    }
}
