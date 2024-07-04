import { z } from "zod";

const orderValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  productId: z.string({
    required_error: "Product Id is required.",
    invalid_type_error: "Product Id must be string.",
  }),
  price: z.number({
    required_error: "Price is required.",
    invalid_type_error: "Price must be number.",
  }),
  quantity: z.number({
    required_error: "Quantity is required.",
    invalid_type_error: "Quantity must be a number.",
  }),
});

export const OrderValidations = {
  orderValidationSchema,
};
