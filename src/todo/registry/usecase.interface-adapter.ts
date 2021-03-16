import {TodoRepository} from "../interface/todo.repository.ts";
import {TodoUseCase} from "../application/usecase.ts";
import {TodoPresenter} from "../interface/todo.presenter.ts"

export interface UseCases {
    Todo: typeof TodoUseCase
}

interface Repositories {
    Todo: typeof TodoRepository
}

interface Presenters {
    Todo: typeof TodoPresenter
}

export default abstract class UseCase {
    Repositories: Repositories
    Presenters: Presenters

    constructor() {
        this.Repositories = {
            Todo: TodoRepository,
        }
        this.Presenters = {
            Todo: TodoPresenter,
        }
    }
}
