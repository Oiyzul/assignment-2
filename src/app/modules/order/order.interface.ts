import mongoose from "mongoose";

export type TOrder = {
  email: string;
  productId: mongoose.Types.ObjectId | string;
  price: number;
  quantity: number;
};
