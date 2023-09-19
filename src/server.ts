import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());

app.get('/terms', (request, response) => {
    return response.json({
        message: "Termos de serviço"
    });
});

app.use("/v1", router);
app.listem(3000, ()=> console.log('Server running')) 
