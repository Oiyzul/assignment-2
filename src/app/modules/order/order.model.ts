import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

orderSchema.set("toJSON", {
  // Remove _id and __v from response
  transform: (doc, { _id, __v, ...rest }) => rest,
});

orderSchema.set("toObject", {
  // Remove _id and __v from response
  transform: (doc, { _id, __v, ...rest }) => rest,
});

export const Order = model("Order", orderSchema);
