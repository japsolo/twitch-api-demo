import { Router } from "express";

// Controller
import productsController from "../controllers/productsController.js";

const productsRouter = Router();

// GET - http://localhost:3000/api/v1/products/
productsRouter.get("/", productsController.getAll);

// GET - http://localhost:3000/api/v1/products/:id
productsRouter.get("/:id", productsController.getOne);

// POST - http://localhost:3000/api/v1/products/
productsRouter.post("/", productsController.store);

// DELETE - http://localhost:3000/api/v1/products/:id
productsRouter.delete("/:id", productsController.delete);

// PUT - http://localhost:3000/api/v1/products/:id
productsRouter.put("/:id", productsController.update);

export default productsRouter;