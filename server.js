import "dotenv/config.js";
import InitKnex from "knex";
import Fastify from 'fastify';

import { GeneralController } from './controllers/generalController.js';
import { IndexRoutes } from './routes/indexRoutes.js';

const knex = InitKnex({
  client: process.env.DB_ENGINE,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  }
});

const fastify = Fastify({
  logger: true
});

fastify.get('/test', GeneralController.Greeting);

fastify.register(IndexRoutes.RegisterRoutes, IndexRoutes.options);

try {
  await fastify.listen({ port: 3000, host: '0.0.0.0' })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
