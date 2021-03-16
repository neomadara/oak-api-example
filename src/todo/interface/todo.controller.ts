import {Status} from "../../../deps.ts"
import Controller from "../registry/controller.interface-adapter.ts";
import {setHttpResponse} from "../../shared/httpResponse.ts";


export class TodoController extends Controller implements todoController{
    async getAll(): Promise<any> {
        const { Interactor, ctx } = this
        const todos = await new Interactor.Todo().getAll()
        if (!todos) {
            return setHttpResponse(ctx, {}, Status.NotFound)
        }
        return setHttpResponse(ctx, todos, Status.OK)
    }
}

interface todoController {
    getAll: () => any
}
