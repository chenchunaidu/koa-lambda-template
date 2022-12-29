import ServerlessHttp from "serverless-http";
import cors from "@koa/cors";
import koa, { Context } from "koa";
import bodyParser from "koa-bodyparser";
import router from "./router";
import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
dotenv.config();

// create prisma client
const prisma = new PrismaClient();

// initialize app
const app = new koa();

app
  .use(cors())
  .use(bodyParser())
  .use(async (ctx: Context, next) => {
    ctx.prisma = prisma;
    await next();
  })
  .use(router.routes())
  .use(router.allowedMethods());

// app.listen(3000, () => {
//   console.log("app listening on port 3000");
// });

export const handler = ServerlessHttp(app);
