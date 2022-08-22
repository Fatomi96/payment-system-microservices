import amqp from 'amqplib';
import 'dotenv/config';
import BillingWorkerController from '../controller/index.js';

const { billingWorker } = BillingWorkerController;

export default class Consumer {
   /**
    * Listen to transactions published on Transaction Queue and Save to Database
    */
   static async consumer() {
      try {

         const connection = await amqp.connect(process.env.AMQP_URL);
         const channel = await connection.createChannel();

         let queue = 'Transaction';
         await channel.assertQueue(queue, {
            durable: false
         });

         console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

         channel.consume(queue, (msg) => {
            let data = msg.content.toString();
            console.log(" [x] Received %s", data);
            setTimeout(() => {
               billingWorker(JSON.parse(data));
            }, 100);
         }, {
            noAck: true
         });
         
      } catch (error) {
         console.log(error);
      }
   }
};

