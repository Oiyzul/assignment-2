import mongoose from "mongoose";

export type TOrder = {
  email: string;
  productId: mongoose.ObjectId;
  price: number;
  quantity: number;
};
