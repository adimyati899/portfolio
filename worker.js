export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Block Git metadata and hidden files
    if (
      url.pathname === "/.git" ||
      url.pathname.startsWith("/.git/") ||
      url.pathname.startsWith("/.env") ||
      url.pathname === "/_headers"
    ) {
      return new Response("Not Found", {
        status: 404,
        headers: {
          "Cache-Control": "no-store"
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
};
