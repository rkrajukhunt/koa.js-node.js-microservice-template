import dotenv from 'dotenv';
dotenv.config();
import Koa from 'koa';
import config from 'config';
import logger from './utils/logger';
import routes from './routes';
import database from './database';

database();

const app = new Koa();

app.use(routes.middleware());

app.on('error', (error) => {
  logger.error(error, 'application error');
});

app.listen(config.get('port'), () => {
  logger.info(`server listening on port : ${config.get('port')} `);
});
