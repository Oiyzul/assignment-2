import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const variantSchema = {
  type: { type: String, required: true },
  value: { type: String, required: true },
  _id: false,
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

productSchema.set("toJSON", {
  // Remove _id and __v from response
  transform: (doc, { _id, __v, ...rest }) => rest,
});

productSchema.set("toObject", {
  // Remove _id and __v from response
  transform: (doc, { _id, __v, ...rest }) => rest,
});

export const Product = model("Product", productSchema);
