import BillingService from "../services/index.js";

const { updateBilling, addFund, addWithdrawal } = BillingService;

export default class BillingWorkerController {
   /**
      * @static
      * @param {data} req - The request from the rabbitmq consumer.
      * @memberof BillingWorkerController
      */
   static async billingWorker(data) {
      try {
         const { transactionType, customerId, transactionAmount, transactionId } = data;
         await updateBilling(transactionId);
         switch (transactionType) {
            case "funding":
               await addFund(customerId, transactionAmount);
               break;
            case "withdrawal":
               addWithdrawal(customerId, transactionAmount);
               break;
         }
      } catch (error) {
         console.log(error);
      }
   }
}