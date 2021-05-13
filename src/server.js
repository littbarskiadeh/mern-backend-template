import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';

const app = express();

app.use(bodyParser.json());

// add all routes, cleaner setup
routes.forEach(route => {
    app[route.method](route.path, route.handler);
})

app.listen(8080, () => {
    console.log('listening on port 8080');
})