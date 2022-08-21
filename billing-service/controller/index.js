import BillingService from '../services';
import { Helper } from '../utils';
import Publisher from '../publisher';

const { addTransaction } = BillingService;
const { publisher } = Publisher;
const { successResponse } = Helper;

export default class BillingController {
   /**
    * @static
    * @param {Request} req - The request from the endpoint.
    * @param {Response} res - The response returned by the method.
    * @param {Next} next
    * @memberof BillingController
    */
   static async addBilling(req, res, next) {
      try {
         const { customerId, amount, type } = req.body;
         const amount_ = type === 'funding' ? amount : amount * -1
         const transactionDetails = await addTransaction(customerId, amount_, type);

         publisher({
            customerId: transactionDetails.customerId,
            transactionAmount: transactionDetails.transactionAmount,
            transactionStatus: transactionDetails.transactionStatus,
            transactionType: transactionDetails.transactionType,
            transactionId: transactionDetails.id,
         });

         return successResponse(res, {
            message: 'Transaction added',
            data: transactionDetails,
         });
      } catch (err) {
         console.log(err);
         res.status(500).json({ status: 'error', message: 'error occured!' });
      }
   }
}
