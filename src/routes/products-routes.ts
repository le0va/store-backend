import express from 'express';

import { getProducts, createProduct, deleteProduct, changeProduct } from '../controllers/products-controllers';

export const router = express.Router();

router.get('/', getProducts);

router.post('/', createProduct);

router.delete('/:pid', deleteProduct);

router.put('/:pid', changeProduct);


