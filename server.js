import express from 'express';

const url = process.env.SERVER_URL;
const port = process.env.SERVER_PORT || 3000;

const app = express();

app.use(express.static('public'));

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