import { Router } from "express";
import { ProductControllers } from "./product.controller";

const router = Router()

router.post('/create-product', ProductControllers.createProduct)

export const productRoutes = router