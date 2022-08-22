/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS account (
   id serial PRIMARY KEY,
   account_number INTEGER UNIQUE NOT NULL,
   credit INTEGER,
   debit INTEGER,
   balance INTEGER,
   customer_id INTEGER REFERENCES customer(id),
   created_at TIMESTAMPTZ DEFAULT now(),
   updated_at TIMESTAMPTZ DEFAULT now()
)