export default {
   findAccount:`
      SELECT * 
      FROM account 
      WHERE account_number=$1
   `,
   fetchAccount:`
      SELECT 
      CONCAT(firstName,' ',lastName) AS full_name, a.account_number, a.balance AS account_balance
      FROM customer
      LEFT JOIN account a
      ON customer.id = a.customer_id
      WHERE customer_id = $1
   `,
};