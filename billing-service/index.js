import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routes';

const port = process.env.PORT || 2001;
const app = express();

app.use(cors());
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use(router);

app.listen(port, ()=>{
   console.log(`Billing service is listening on port ${port}`)
})

export default app;