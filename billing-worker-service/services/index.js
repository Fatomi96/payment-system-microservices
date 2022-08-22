import db from '../db/setup/postgres.js';
import updateBilling from '../db/queries/index.js';
import addWithdrawal from '../db/queries/index.js';
import addFund from '../db/queries/index.js';


export default class BillingService {
   /**
    * update the billing details on the transaction table
    * @memberof BillingService
    * @param id - The customer's id
    */
   static updateBilling(id) {
      db.none(updateBilling.updateBilling, [id]);
   }

   /**
    * add credit transaction to the account table
    * @memberof BillingService
    * @param customerId  - The id of the customer
    * @param transactionAmount - the amount of the transaction requested
    */
    static addFund(customerId, transactionAmount) {
      db.none(addFund.addFund, [
         transactionAmount,
         customerId
      ])
  }

   /**
    * adds debit transaction to the account table
    * @memberof BillingService
    * @param customerId  - The id of the customer
    * @param transactionAmount - the amount of the transaction requested
    */
    static addWithdrawal(customerId, transactionAmount) {
       db.none(addWithdrawal.addWithdrawal, [
          transactionAmount,
          customerId
       ])
   }
}



