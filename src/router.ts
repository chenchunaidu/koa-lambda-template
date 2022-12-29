import Router from "koa-router";

const router = new Router();

router.get("/api", (ctx, next) => {
  ctx.body = "Hello world";
});

router.get("/hello", (ctx, next) => {
  ctx.body = "Hello world";
});

export default router;
