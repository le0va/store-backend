import express from 'express';
import bodyParser from 'body-parser';

import { router as productsRoutes } from './routes/products-routes';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use('/api/products', productsRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Could not find this route' });
});

app.listen(process.env.PORT || 5000);