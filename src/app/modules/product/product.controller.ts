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

export const ProductControllers = {
  createProduct,
};
