import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { ProductValidations } from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedProductData = ProductValidations.productValidationSchema.parse(req.body)

    const result = await ProductServices.createProductIntoDB(validatedProductData)

    res.status(201).json({
        success: true,
        message: 'Product created successfully.',
        data: result
    });
  } catch (err: any) {
    res.status(500).json({
        success: false,
        message: 'An error occurred while creating the product.',
        error: err.message
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB()

    res.status(200).json({
        success: true,
        message: 'Products fetched successfully.',
        data: result
    });
  } catch (err: any) {
    res.status(500).json({
        success: false,
        message: 'An error occurred while fetching products.',
        error: err.message
    });
  }
};

const getSpecificProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getSpecificProductFromDB(req.params.productId)

    res.status(200).json({
        success: true,
        message: 'Product fetched successfully.',
        data: result
    });
  } catch (err: any) {
    res.status(500).json({
        success: false,
        message: 'An error occurred while fetching the product.',
        error: err.message
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.updateProductIntoDB(req.params.productId, req.body)

    res.status(200).json({
        success: true,
        message: 'Product updated successfully.',
        data: result
    });
  } catch (err: any) {
    res.status(500).json({
        success: false,
        message: 'An error occurred while updating the product.',
        error: err.message
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.deleteProductFromDB(req.params.productId)

    res.status(200).json({
        success: true,
        message: 'Product deleted successfully.',
        data: null
    });
  } catch (err: any) {
    res.status(500).json({
        success: false,
        message: 'An error occurred while deleting the product.',
        error: err.message
    });
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getSpecificProduct,
  updateProduct,
  deleteProduct
};
