import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router()

router.post('/', ProductControllers.createProduct)
router.get('/:productId', ProductControllers.getSpecificProduct)
router.put('/:productId', ProductControllers.updateProduct)
router.delete('/:productId', ProductControllers.deleteProduct)
router.get('/', ProductControllers.getProducts)

export const productRoutes = router