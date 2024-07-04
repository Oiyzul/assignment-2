import { TProduct } from "./product.interface"
import { Product } from "./product.model"

const createProductIntoDB = async(product:TProduct) => {
    const newProduct = await Product.create(product)
    return newProduct
}

export const ProductServices = {
    createProductIntoDB
}