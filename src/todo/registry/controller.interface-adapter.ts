import {Context} from "../../../deps.ts";
import {TodoUseCase} from "../application/usecase.ts";
import { UseCases } from "./usecase.interface-adapter.ts";

export default abstract class Controller {
    Interactor: UseCases

    constructor(protected ctx: Context) {
        this.Interactor = {
            Todo: TodoUseCase,
        }
    }
}
