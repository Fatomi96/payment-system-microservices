import axios from 'axios';
import Service from '../service/index.js';
import { Helper } from '../utils/index.js';

const { successResponse } = Helper;
const { getAccount, fetchAccountDetails } = Service;

export default class Controller {
   /**
      * To process customer's request to the billing services
      * @static
      * @param {Request} req - The request from the endpoint.
      * @param {Response} res - The response returned by the method.
      * @param {Next} next
      * @memberof Controller
      */
   static async sendToBilling(req, res, next) {
      const { accountNumber, type, amount } = req.body;
      const { customerId } = await getAccount(accountNumber);
      const billingDetails = { customerId, amount, type };

      axios.post(process.env.BILLING_SERVICE_URL, billingDetails)
         .then((response) => {
            res.status(response.status).json(response.data)
         })
         .catch((err) => {
            console.log(err)
            res.status(500).json({ status: "error", message: "error occured!" })
         });
   };

   /**
      * To fetch customer account details
      * @static
      * @param {Request} req - The request from the endpoint.
      * @param {Response} res - The response returned by the method.
      * @param {Next} next
      * @memberof Controller
      */
   static async fetchAccount(req, res, next) {
      try {
         const data = await fetchAccountDetails(req.params.id);
         return successResponse(res, {
            message: 'Record fetched successfully',
            data: data
         });
      } catch (err) {
         console.log(err);
         res.status(404).json({ status: 'error', message: 'Account not found' });
      }
   }
}