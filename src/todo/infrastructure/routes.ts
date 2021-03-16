import { Router } from "../../../deps.ts";

import GetHealth from "../../health/infrastructure/GetHealth.controller.ts"
import { TodoController } from "../interface/todo.controller.ts";

const router = new Router()

router.get(GetHealth.route, GetHealth.action)
router.get("/todo", (ctx): Promise<void> => new TodoController(ctx).getAll())

export default router;
