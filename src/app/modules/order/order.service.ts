import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
  let success, message, data;
  try {
    const productId = order.productId;
    const orderedProuduct = await Product.findById(productId);
    console.log("product", orderedProuduct);
    if (!orderedProuduct) {
      success = false;
      message = "Product not found";
      return {
        success: success,
        message: message,
      };
    }
    if (order.quantity <= 0) {
      throw new Error("Invalid quantity");
    }
    if (orderedProuduct.inventory.quantity < order.quantity) {
      success = false;
      message = "Insufficient quantity available in inventory";
      data = null;
      return {
        success: success,
        message: message,
        data: data,
      };
    }

    if (orderedProuduct.inventory.quantity === order.quantity) {
      orderedProuduct.inventory.quantity = 0;
      orderedProuduct.inventory.inStock = false;
    }

    if (orderedProuduct.inventory.quantity > order.quantity) {
      orderedProuduct.inventory.quantity -= order.quantity;
    }

    const newOrder = await Order.create(order);
    await Product.findByIdAndUpdate(productId, orderedProuduct);

    success = true;
    message = "Order created successfully";
    data = newOrder;

    return {
      success: success,
      message: message,
      data: data,
    };
  } catch (err: any) {
    console.log(err);
  }
};

const getAllOrdersFromDB = async (email: string | undefined) => {
  let success = true,
    message,
    data;

  if (!email) {
    data = await Order.find();
    message = "Orders fetched successfully.";

    if (!data.length) {
      success = false;
      message = "Order not found.";
      data = null;
    }
  }

  if (email) {
    data = await Order.find({
      email: email,
    });
    message = "Orders fetched successfully for user email";

    if (!data.length) {
      success = false;
      message = "Order not found.";
      data = null;
    }
  }

  return {
    success: success,
    message: message,
    data: data,
  };
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
