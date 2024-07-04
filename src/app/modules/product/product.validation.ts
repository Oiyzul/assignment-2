import { z } from "zod";

const variantsSchema = z.object({
    type: z.string({required_error: 'Type is required.', invalid_type_error: 'Type must be string.'}),
    value: z.string({required_error: 'Value is required.', invalid_type_error: 'Value must be string.'})
})

const inventorySchema = z.object({
    quantity: z.number({ required_error: 'Quantity is required.', invalid_type_error: 'Quantity must be a number.'}),
    inStock: z.boolean()
})

const productValidationSchema = z.object({
  name: z
    .string({
      required_error: "Name is required.",
      invalid_type_error: "Name must be string.",
    })
    .min(3, "Name cannot be less than 3 characters.")
    .max(100, "Name cannot be greater than 100 characters."),
    description: z
    .string({
      required_error: "Description is required.",
      invalid_type_error: "Description must be string.",
    })
    .min(5, "Description cannot be less than 5 characters."),
    price: z.number({required_error: "Price is required.", invalid_type_error: "Price must be number."}),
    category: z.string({required_error: "Category is required.", invalid_type_error: "Category must be string."}),
    tags: z.array(z.string()),
    variants: z.array(variantsSchema),
    inventory: inventorySchema
});

export const ProductValidations = {
    productValidationSchema
}