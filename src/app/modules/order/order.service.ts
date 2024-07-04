import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
  const newOrder = await Order.create(order);
  return newOrder;
};

const getAllOrdersFromDB = async (email: string | undefined) => {
  let orders: TOrder[] = [];

  if (!email) {
    orders = await Order.find();
  }

  if (email) {
    orders = await Order.find({
      email: email,
    });
  }
  return orders;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB
};
