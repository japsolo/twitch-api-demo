import { productsService } from "../services/productsService.js";

const productsController = {
    getAll: async (req, res) => {
        const allProducts = await productsService.getAll();
        return res.status(200).json({
            status: 200,
            total: allProducts.length,
            data: allProducts
        });
    },
    getOne: async (req, res) => {
        const { id } = req.params;
        const product = await productsService.getOne(id);
        return res.status(200).json({
            status: 200,
            data: product,
        })
    },
    store: async (req, res) => {
        if (!req.body.name || !req.body.category) {
            return res.status(400).json({
                status: 400,
                isStored: false,
                message: "The product name and category are required"
            })
        }
        const newProduct = { ...req.body };
        const productStored = await productsService.store(newProduct);
        return res.status(200).json({
            isStored: true,
            data: productStored
        });
    },
    delete: async (req, res) => {
        const { id } = req.params;
        const response = await productsService.delete(id);
        return res.status(200).json({
            status: 200,
            isDeleted: true,
            data: response,
        })
    },
    update: async (req, res) => {
        const { id } = req.params;
        const oldProduct = await productsService.getOne(id);
        if (!oldProduct) {
            return res.status(404).json({
                status: 404,
                message: "The product is not found"
            })
        }
        const updatedProduct = {
            ...oldProduct._doc, // product stored values, only the product data
            ...req.body,
        };
        const response = await productsService.update(id, updatedProduct);
        return res.status(200).json({
            status: 200,
            isUpdated: true,
            data: response,
        })
    }
}

export default productsController;