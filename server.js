import express from 'express';
import reviewRouter from './routers/reviews.js';
import productRouter from './routers/products.js';
import { checkProductSlugExists } from './middlewares/checkProductSlugExists.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';
const url = process.env.SERVER_URL;
const port = process.env.SERVER_PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use("/products", productRouter);

app.use("/products/:productSlug/reviews", [checkProductSlugExists, reviewRouter]);

app.use(notFound);
app.use(errorHandler);

app.get("/", (request, response) => {
    response.json({
        message: 'il server funziona correttamente'
    })
});

app.listen(port, (error) => {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log('server in ascolto a questa porta: ', port);
})