import db from '../db/setup/postgres'
import createBilling from '../db/queries'

export default class BillingService {
   /**
    * add an incoming transaction 
    * @memberof AccountService
    * @param customerId  - The id of the customer
    * @param amount  - The transaction amount
    * @param type  - The type of transaction
    * @returns with an Object of the transaction resource .
    */
   static addTransaction(customerId, amount, type) {
      return db.one(createBilling.createBilling, [
         customerId,
         amount,
         type
      ]);
   }
}