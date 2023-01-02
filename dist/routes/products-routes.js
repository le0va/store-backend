"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const products_controllers_1 = require("../controllers/products-controllers");
exports.router = express_1.default.Router();
exports.router.get('/', products_controllers_1.getProducts);
exports.router.post('/', products_controllers_1.createProduct);
exports.router.delete('/:pid', products_controllers_1.deleteProduct);
exports.router.put('/:pid', products_controllers_1.changeProduct);
