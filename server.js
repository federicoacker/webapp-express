import express from 'express';
import reviewRouter from './routers/reviews.js';
import productRouter from './routers/products.js';
import categoriesRouter from './routers/categories.js';
import { checkProductSlugExists } from './middlewares/checkProductSlugExists.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';
import categoriesController from './controllers/categories.js';
import cors from "cors";
const port = process.env.SERVER_PORT || 3000;

const app = express();

app.use(cors());
app.use(express.static('public'));


app.use("/products", productRouter);

app.use("/products/:productSlug/reviews", [checkProductSlugExists, reviewRouter]);

app.use("/categories", categoriesRouter)

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