import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router()

router.post('/', ProductControllers.createProduct)
router.get('/:productId', ProductControllers.getSpecificProduct)
router.get('/', ProductControllers.getProducts)

export const productRoutes = router