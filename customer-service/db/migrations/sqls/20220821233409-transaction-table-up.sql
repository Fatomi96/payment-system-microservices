/* Replace with your SQL commands */
CREATE TYPE status AS ENUM ('failed', 'pending', 'success');
CREATE TYPE type AS ENUM ('funding', 'withdrawal');

CREATE TABLE IF NOT EXISTS transaction (
   id serial PRIMARY KEY,
   transaction_amount INTEGER,
   transaction_status status DEFAULT 'pending',
   customer_id INTEGER REFERENCES customer(id),
   transaction_type type DEFAULT 'funding',
   created_at TIMESTAMPTZ DEFAULT now(),
   updated_at TIMESTAMPTZ DEFAULT now()
)