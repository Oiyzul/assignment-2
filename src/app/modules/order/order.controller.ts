import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { OrderValidations } from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const validatedOrderData = OrderValidations.orderValidationSchema.parse(
      req.body
    );

    const result = await OrderServices.createOrderIntoDB(validatedOrderData);

    result?.data != null
      ? res.status(201).json({
          success: result?.success,
          message: result?.message,
          data: result.data,
        })
      : res.status(500).json({
          success: result?.success,
          message: result?.message,
        });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while creating the order.",
      error: err.message,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query?.email;
    const result = await OrderServices.getAllOrdersFromDB(
      email as string | undefined
    );

    result?.data != null
      ? res.status(200).json({
          success: result?.success,
          message: result?.message,
          data: result.data,
        })
      : res.status(500).json({
          success: result?.success,
          message: result?.message,
        });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching orders.",
      error: err.message,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getOrders,
};
