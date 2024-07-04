import express from 'express';
import cors from 'cors';
import router from './app/routes';

const app = express()

 //parsers
 app.use(cors())
 app.use(express.json())

 //routes
 app.use('/api', router)

 app.get('/api', (req,res) => {
    res.send('API is running...');
 })

 export default app