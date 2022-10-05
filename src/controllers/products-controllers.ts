import { RequestHandler } from "express";
import productList from "../shared/product-list";

export const getProducts: RequestHandler = (req, res, next) => {
    res.status(200).json({ products: productList });
}

export const createProduct: RequestHandler = (req, res, next) => {
    const { title, price, description, category, image } = req.body;
    const createdProduct = {
        id: productList.length + 1,
        title,
        price,
        description,
        category,
        image
    }
    productList.unshift(createdProduct);
    res.status(200).json({ createProduct });
}

export const deleteProduct: RequestHandler = (req, res, next) => {
    const productId = req.params.pid;

    let deletedProduct;
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].id.toString() == productId) {
            deletedProduct = productList.splice(i, 1)[0];
            return;
        }
    }
    res.status(200).json({ deletedProduct });
}

export const changeProduct: RequestHandler = (req, res, next) => {
    const productId = req.params.pid;
    const { title, price, description, category, image } = req.body;

    let changedProduct;
    productList.forEach(product => {
        if (product.id.toString() == productId) {
            product.title = title;
            product.price = price;
            product.description = description;
            product.category = category;
            product.image = image;
            changedProduct = product;
            return;
        }
    })
    res.status(200).json({ changedProduct });
}