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

const updateProductIntoDB = async (
  productId: string,
  product: Partial<TProduct>
) => {
  const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  });
  return updatedProduct;
};

const deleteProductFromDB = async (
  productId: string
) => {
  const deletedProduct = await Product.findByIdAndDelete(productId);
  return deletedProduct;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSpecificProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB
};
