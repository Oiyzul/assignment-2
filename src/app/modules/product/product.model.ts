import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const variantSchema = {
  type: { type: String, required: true },
  value: { type: String, required: true },
};

const inventorySchema = {
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
};

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: [variantSchema],
  inventory: inventorySchema,
});

export const Product = model("Product", productSchema);
