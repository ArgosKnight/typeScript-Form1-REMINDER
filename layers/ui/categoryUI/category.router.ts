import express from "express";
import { ICategory, Categoria } from "../../data-acces/categorySchema/category-schema";
import { ListCategories } from "../../businessLogic/category/list-category";
import { GetCategoryById } from "../../businessLogic/category/get-category-by-id";
import { AddCategory } from "../../businessLogic/category/add-category";
import { stringToObjectId } from "../utils/stringToObjectId";
import { validateCategory } from "./categoryValidation/category-validation";

export const categoryRouter = express.Router()

categoryRouter.get('/', async (req, res, next) => {
  try {
    const categorias: ICategory[] = await new ListCategories(Categoria).execute()
    res.send(categorias)
  } catch (err) {
    next(err)
  }
})

categoryRouter.get('/:id', async(req, res, next)=>{
  try {
    const id = stringToObjectId(req.params.id);
    const categorias: ICategory | null = await new GetCategoryById(Categoria).execute(id);
    if (!categorias) {
      res.status(400).send('Category not found');
    } else {
      res.send(categorias);
    }
  } catch (err) {
      next(err);
    }
});

categoryRouter.post('/add', async (req, res, next)=>{
  try {
    const isValidCategory = validateCategory(req.body);
    if (!isValidCategory) {
      res.send('Invalid category');
    } else {
      const { name } = req.body; 
      const newCategory: ICategory = await new AddCategory(Categoria).execute(name);
      res.send(newCategory);
    }
  } catch (err) {
    next(err);
  }
});
