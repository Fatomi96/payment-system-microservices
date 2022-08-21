import Service from '../service/index.js';
import { Helper, ApiError } from '../utils/index.js';

const { errorResponse, validateInput } = Helper;
const { getAccount } = Service;

export default class Middleware {
   /**
   * @static
   */
   static validate(schema) {
      return async (req, res, next) => {
         try {
            await validateInput(schema, req.body);
            next();
         } catch (error) {
            const apiError = new ApiError({
               status: 400,
               message: error.details[0].message
            });
            errorResponse(req, res, apiError);
         }
      };
   }
   /**
      * Checks if account exists
      * @static
      * @param {Request} req - The request from the endpoint.
      * @param {Response} res - The response returned by the method.
      * @param {Next} next - The function that calls the next handler.
      * @memberof FormMiddleware
      * @returns { JSON } - Returns the details of the account
      */
   static async checkAccountExists(req, res, next) {
      try {
         const account = await getAccount(req.body.accountNumber);
         console.log(account, '=======>');
         if (account == null) {
            res.status(404).json({ status: "error", message: "Record not found" })
         } else {
            req.balance = account.balance;
            return next();
         }
      } catch (e) {
         console.log(e)
         res.status(500).json({ status: "error", message: "error occured!" })
      }
   }

   static async checkAmountLimit(req, res, next) {
      try {
         const { amount, type } = req.body;
         if (req.balance < 0) {
            return res.status(402).json({ status: "error", message: "Insufficient Balance" })
         } else if (type === 'withdrawal' && amount > req.balance) {
            return res.status(402).json({ status: "error", message: "Insufficient Balance" })
         }
         return next();
      } catch (e) {
         console.log(e)
         res.status(500).json({ status: "error", message: "error occured!" })
      }
   }
}
