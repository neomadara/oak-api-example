import { Context } from "../../../deps.ts";
import {setHttpResponse} from "../../shared/httpResponse.ts";

const action = (ctx: Context) => {
    return setHttpResponse(ctx, {'message': 'health v5'}, 200)
}



export default {
    method: 'GET',
    route: '/health',
    action
}
