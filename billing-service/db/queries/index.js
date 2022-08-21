export default {
   createBilling: `
   INSERT INTO transaction (
      customer_id,
      transaction_amount,
      transaction_type
   ) VALUES (
      $1, $2, $3
   ) returning *
   `,
};