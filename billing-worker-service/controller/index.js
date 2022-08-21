import BillingService from "../services/index.js";

const { updateBilling, addFund, addWithdrawal } = BillingService;

export default class BillingWorkerController {

   static async billingWorker(data) {
      try {
         console.log(data, '======>');
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
         
      }
   }
}