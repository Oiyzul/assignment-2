import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
  const newProduct = await Product.create(product);
  return newProduct;
};

const getAllProductsFromDB = async (searchTerm: string) => {
  let data,
    success = true,
    message;

  if (!searchTerm) {
    data = await Product.find();
    message = "Products fetched successfully.";

    if (!data.length) {
      success = false;
      message = "No product found.";
      data = null;
    }
  }

  if (searchTerm) {
    data = await Product.find({
      name: { $regex: new RegExp(searchTerm, "i") },
    });
    message = `Product matching search term '${searchTerm}' fetched successfully.`;

    if (!data.length) {
      success = false;
      message = "No products found.";
      data = null;
    }
  }
  return {
    success: success,
    message: message,
    data: data,
  };
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

const deleteProductFromDB = async (productId: string) => {
  const deletedProduct = await Product.findByIdAndDelete(productId);
  return deletedProduct;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSpecificProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
