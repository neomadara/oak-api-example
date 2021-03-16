import {Context} from "../../deps.ts";

export const setHttpResponse = (ctx: Context, body: object, status: number) => {
    ctx.response.body = body;
    ctx.response.status = status
}
