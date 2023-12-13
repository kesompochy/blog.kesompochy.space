const port = process.env.PORT || 3000;

Bun.serve({
  port: port,
  fetch(req) {
    return new Response("Bun!");
  },
});
