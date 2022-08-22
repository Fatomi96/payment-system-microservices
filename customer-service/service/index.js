import db from '../db/setup/postgres.js';
import queries from '../db/queries/queries.js';

const { findAccount, fetchAccount } = queries;

export default class Service {
   /**
    * Fetches an account details
    * @memberof Service
    * @param  id  - The id of the customer
    */
   static async fetchAccountDetails(id) {
      return db.one(fetchAccount, id);
   }

   /**
    * Fetches an account
    * @memberof Service
    * @param  accountNumber  - The account number of the customer
    */
   static async getAccount(accountNumber) {
      return db.oneOrNone(findAccount, accountNumber);
   }
}
