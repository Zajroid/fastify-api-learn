// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const PORT = 5000

fastify.get('/items', async (request, reply) => {
    reply.send({
        test: 'Hello'
    })
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: PORT })
  } catch (err) {  
    fastify.log.error(err)
    process.exit(1)
  }
}

start()