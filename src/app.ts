import express from 'express';
import cors from 'cors';

const app = express()

 //parsers
 app.use(cors())
 app.use(express.json())

 //routes
//  app.use('/api/products')

 app.get('/api', (req,res) => {
    res.send('API is running...');
 })

 export default app