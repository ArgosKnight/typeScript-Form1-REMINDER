import { ObjectId } from 'mongodb';
import mongoose, { Document, Model, Schema } from 'mongoose';
import { ICategory } from '../categorySchema/category-schema';

export interface IProduct extends Document {
  id: ObjectId;
  name: string;
  brand: string;
  bardCode: string;
  description: string;
  keywords: string[];
  createdAt: Date;
  updatedAt: Date;
  price: number;
  isActive: boolean;
  category: ICategory['_id'];
}

const ProductSchema: Schema = new mongoose.Schema({
  id:{
    type: ObjectId,
    require: true
  },
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
  },
  bardCode: {
    type: String,
  },
  description: {
    type: String,
  },
  keywords: {
    type: [String],
  },
  createdAt: {
    type: Date, default: Date.now 
  },
  updatedAt: {
    type: Date,
  },
  price: {
    type: Number,
  },
  isActive: {
    type: Boolean,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
  }
});

ProductSchema.pre('updateOne', function() { // Middleware pre para actualizar el documento
  this.set({ updatedAt: new Date() }); // Establece la fecha actual en updatedAt
});

const Product: Model<IProduct> = mongoose.model<IProduct>('products', ProductSchema);

export { Product };
