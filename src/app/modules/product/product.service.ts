import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

const getAllProductsFromDB = async () => {
  const products = await Product.find();
  return products;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
};
