require('dotenv/config')
// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const items = require("./items");

const PORT = 5000;


fastify.get('/items', (req, reply) => {
  reply.send(items);
});

fastify.get('/items/:id', (req, reply) => {
  const { id } = req.params;

  const item = items.find((item) => item.id === id);

  reply.send(item);
});

// Declare a route
fastify.get("/", async (req, reply) => {
  return { hello: "world" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
