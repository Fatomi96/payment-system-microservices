import db from '../db/setup/postgres.js';
import queries from '../db/queries/queries.js';

const { findAccount, fetchAccount } = queries;

export default class Service {
   /**
    * Fetches an account
    * @memberof AccountService
    * @param {string} accountNumber  - The account number of the customer
    * @returns { Promise<Object | Error> } A promise that resolves or rejects
    * with an Object of the account resource or an Error.
    */
   static async getAccount(accountNumber) {
      return db.oneOrNone(findAccount.findAccount, accountNumber);
   }

   static async fetchAccountDetails(id) {
      return db.one(fetchAccount.fetchAccount, id)
   }
};
 