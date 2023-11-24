import figlet from "figlet";

const server = Bun.serve({
  port: 3001,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname == "/") {
      const body = figlet.textSync("sup, dawg");
      return new Response(body);
    }
    if (url.pathname === "/about") {
      return new Response("about me");
    }

    if (url.pathname === "/contact") {
      return new Response("conact us");
    }

    return new Response("404");
  },
});

console.log(`Listening on PORT http://localhost:${server.port}`);
