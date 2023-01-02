"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeProduct = exports.deleteProduct = exports.createProduct = exports.getProducts = void 0;
const product_list_1 = __importDefault(require("../shared/product-list"));
const getProducts = (req, res, next) => {
    res.status(200).json({ products: product_list_1.default });
};
exports.getProducts = getProducts;
const createProduct = (req, res, next) => {
    const { title, price, description, category, image } = req.body;
    const createdProduct = {
        id: product_list_1.default.length + 1,
        title,
        price,
        description,
        category,
        image
    };
    product_list_1.default.unshift(createdProduct);
    res.status(200).json({ createProduct: exports.createProduct });
};
exports.createProduct = createProduct;
const deleteProduct = (req, res, next) => {
    const productId = req.params.pid;
    let deletedProduct;
    for (let i = 0; i < product_list_1.default.length; i++) {
        if (product_list_1.default[i].id.toString() == productId) {
            deletedProduct = product_list_1.default.splice(i, 1)[0];
            return;
        }
    }
    res.status(200).json({ deletedProduct });
};
exports.deleteProduct = deleteProduct;
const changeProduct = (req, res, next) => {
    const productId = req.params.pid;
    const { title, price, description, category, image } = req.body;
    let changedProduct;
    product_list_1.default.forEach(product => {
        if (product.id.toString() == productId) {
            product.title = title;
            product.price = price;
            product.description = description;
            product.category = category;
            product.image = image;
            changedProduct = product;
            return;
        }
    });
    res.status(200).json({ changedProduct });
};
exports.changeProduct = changeProduct;
