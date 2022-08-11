const Router = require('fastify')

const router = new Router.router()


router.get("/items", async (request, reply) => {
  reply.send({
    items,
  });
});

module.exports = router