import { Model } from "mongoose";
import { ICategory } from "../../data-acces/categorySchema/category-schema";

export class ListCategories{
    constructor (private readonly categoryModel: Model<ICategory>){}
    
    async execute(): Promise<ICategory[]>{
        const category:ICategory[]= await this.categoryModel.find()
        return category
    }
}