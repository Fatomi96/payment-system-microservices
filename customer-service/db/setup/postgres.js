import promise from 'bluebird';
import pg from 'pg-promise';
import monitor from 'pg-monitor';
import { config } from 'dotenv';

const camelizeColumns = (data) => {
  const template = data[0] || {};
  Object.keys(template).forEach((prop) => {
    const camel = pg.utils.camelize(prop);
    if (!(camel in template)) {
      data.forEach((el) => {
        const d = el;
        d[camel] = d[prop];
        delete d[prop];
      });
    }
  });
};

config();

const options = {
  promiseLib: promise,
  receive: (data, result, e) => camelizeColumns(data),
};

monitor.setTheme('matrix');
monitor.attach(options);

const pgp = pg(options);
const db = pgp(process.env.DATABASE_URL);


export default db;
