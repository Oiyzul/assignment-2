import { RequestHandler } from "express";

const notFound:RequestHandler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: "Route not found."
    })
}

export default notFound