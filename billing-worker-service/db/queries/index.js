export default {
   updateBilling: `
   UPDATE transaction
   SET 
      transaction_status = 'success'
   Where id = $1
   `,
   addWithdrawal: `
   UPDATE account
   SET debit = $1,
      balance = balance + $1
   WHERE 
      customer_id = $2
   `,
   addFund: `
   UPDATE account
   SET credit = $1,
      balance = balance + $1
   WHERE 
      customer_id = $2
   `,
};