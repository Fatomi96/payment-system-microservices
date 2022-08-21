import db from '../db/setup/postgres.js';
import updateBilling from '../db/queries/index.js';
import addWithdrawal from '../db/queries/index.js';
import addFund from '../db/queries/index.js';


export default class BillingService {
   /**
    * Fetches an account
    * @memberof AccountService
    * @param {string} accountNumber  - The account number of the customer
    * @returns { Promise<Object | Error> } A promise that resolves or rejects
    * with an Object of the account resource or an Error.
    */
   static updateBilling(id) {
      db.none(updateBilling.updateBilling, [id]);
   }

   /**
    * Fetches an account
    * @memberof AccountService
    * @param {string} accountNumber  - The account number of the customer
    * @returns { Promise<Object | Error> } A promise that resolves or rejects
    * with an Object of the account resource or an Error.
    */
    static addFund(customerId, transactionAmount) {
      db.none(addFund.addFund, [
         transactionAmount,
         customerId
      ])
  }

   /**
    * Fetches an account
    * @memberof AccountService
    * @param {string} accountNumber  - The account number of the customer
    * @returns { Promise<Object | Error> } A promise that resolves or rejects
    * with an Object of the account resource or an Error.
    */
    static addWithdrawal(customerId, transactionAmount) {
       db.none(addWithdrawal.addWithdrawal, [
          transactionAmount,
          customerId
       ])
   }
}



