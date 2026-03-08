export default {
  async fetch(request, env, ctx) {

    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(
        JSON.stringify({
          service: "K-Vault",
          status: "running",
          platform: "Cloudflare Workers"
        }),
        {
          headers: {
            "content-type": "application/json;charset=UTF-8"
          }
        }
      );
    }

    if (url.pathname === "/health") {
      return new Response("OK");
    }

    return new Response("Not Found", { status: 404 });
  }
};
