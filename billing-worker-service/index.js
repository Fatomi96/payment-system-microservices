import express from 'express';
import 'dotenv/config';
import Consumer from "./consumer/index.js";

const { consumer } = Consumer;

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

consumer();

app.listen(port, ()=>{
   console.log(`Billing Worker service is listening on port ${port}`)
})

export default app;