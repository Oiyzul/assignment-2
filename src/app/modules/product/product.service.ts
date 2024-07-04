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

const getSpecificProductFromDB = async (productId: string) => {
  const product = await Product.findById(productId);
  return product;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSpecificProductFromDB,
};
