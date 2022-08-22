/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS customer (
   id serial PRIMARY KEY,
   firstName VARCHAR,
   lastName VARCHAR,
   created_at TIMESTAMPTZ DEFAULT now(),
   updated_at TIMESTAMPTZ DEFAULT now()
)