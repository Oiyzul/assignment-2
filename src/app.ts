import express from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';

const app = express()

 //parsers
 app.use(cors())
 app.use(express.json())

 //routes
 app.use('/api', router)

 app.get('/api', (req,res) => {
    res.send('API is running...');
 })

 app.use(globalErrorHandler)

 //not found route
 app.use(notFound)

 export default app