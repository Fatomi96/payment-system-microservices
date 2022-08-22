import amqp from 'amqplib';
import 'dotenv/config';

export default class Publisher {
   /**
 * Publish Billing Details to Billing worker sservice
 * @param {Object} billingDetails - Details of incoming transaction
 */
   static async publisher(billingDetails) {
      try {
         const connection = await amqp.connect(process.env.AMQP_URL);
         const channel = await connection.createChannel();
         
         let queue = 'Transaction';
         let msg = JSON.stringify(billingDetails);

         await channel.assertQueue(queue, {
            durable: false
         });

         channel.sendToQueue(queue, Buffer.from(msg, 'utf8'));
         console.log(" [x] Sent %s", msg);

      } catch (error) {
         console.log(error);
      }
   }
};