import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { OrderValidations } from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const validatedOrderData = OrderValidations.orderValidationSchema.parse(
      req.body
    );

    const result = await OrderServices.createOrderIntoDB(validatedOrderData);

    res.status(201).json({
      success: true,
      message: "Order created successfully.",
      data: result,
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
    const result = await OrderServices.getAllOrdersFromDB(email as string | undefined);

    res.status(200).json({
      success: true,
      message: email
        ? `Orders fetched successfully for user email.`
        : "Orders fetched successfully.",
      data: result,
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
