import express, {Application , Router} from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './data-acces/db/db';
import { categoryRouter } from './ui/categoryUI/category.router';
import { productRouter } from './ui/productUI/product.router';


const app: Application = express()
const api: Router = Router()

app.use(bodyParser.json());
connectDB();

api.use('/category', categoryRouter)
api.use('/products', productRouter)

app.use('/api', api)

app.use((error:Error & { statusCode?: number }, req: express.Request, res:express.Response, next: express.NextFunction)=>{
    console.log(error);
    console.log(error.statusCode, res.statusCode)
    const status= error.statusCode || 500;
    const message = error.message || "ERROR EN EL INTERIOR DEL SERVIDOR";
    res.status(status).json({code:status, message: message})
});

app.listen(3000, ()=>{
    console.log('SERVIDOR ON, LETS GO !!! ')
})