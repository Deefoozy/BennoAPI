import "dotenv/config.js";
import Fastify from 'fastify';

import { GeneralController } from './controllers/generalController.js';
import { IndexRoutes } from './routes/indexRoutes.js';

const fastify = Fastify({
  logger: true
});

fastify.get('/test', GeneralController.Greeting);

fastify.register(IndexRoutes.RegisterRoutes, IndexRoutes.options);

try {
  await fastify.listen({ port: 3000 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
