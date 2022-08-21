import db from '../db/setup/postgres'
import createBilling from '../db/queries'

export default class BillingService {
   /**
    * Fetches an account
    * @memberof AccountService
    * @param {string} accountNumber  - The account number of the customer
    * @returns { Promise<Object | Error> } A promise that resolves or rejects
    * with an Object of the account resource or an Error.
    */
   static addTransaction(customerId, amount, type) {
      return db.one(createBilling.createBilling, [
         customerId, 
         amount, 
         type
      ]);
   }
}