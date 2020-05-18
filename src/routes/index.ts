import Router from 'koa-joi-router';
import healthCheckRouter from './healthCheck';

const router = Router();

// prefix for microservice
router.prefix('');

router.route({
  handler: ctx => {
    ctx.body = {
      response: 'Ok'
    };
  },
  method: 'GET',
  path: '/'
});

router.use(healthCheckRouter.middleware());

export default router;
