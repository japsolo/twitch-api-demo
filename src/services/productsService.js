import PRODUCT from '../models/productsModel.js';

// import {productsService} from "...";

export const productsService = {
    getAll: () => {
        try {
            return PRODUCT.find({ deletedAt: null });
        } catch (error) {
            return error;
        }
    },
    getOne: (id) => {
        try {
            return PRODUCT.findOne({ _id: id });
        } catch (error) {
            return error;
        }
    },
    store: (newProduct) => {
        try {
            return PRODUCT.create(newProduct);
        } catch (error) {
            return error;
        }
    },
    delete: (id) => {
        try {
            return PRODUCT.findByIdAndUpdate(
                id,
                { deletedAt: new Date },
                { new: true }
            );
        } catch (error) {
            return error;
        }
    },
    update: (id, newProductData) => {
        try {
            return PRODUCT.updateOne(
                { _id: id },
                { $set: newProductData }
            );
        } catch (error) {
            return error;
        }
    }
}