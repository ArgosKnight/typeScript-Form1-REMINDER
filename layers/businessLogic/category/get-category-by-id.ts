import { Model } from "mongoose";
import { ICategory } from "../../data-acces/categorySchema/category-schema";

import { ObjectId } from "mongodb";

export class GetCategoryById {
  constructor (private readonly categoryModel: Model<ICategory>) {}

  async execute(id: ObjectId): Promise<ICategory | null> {
    const category: ICategory | null = await this.categoryModel.findById(id);
    return category;
  }
}
