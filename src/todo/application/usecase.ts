import UseCase from "../registry/usecase.interface-adapter.ts";

export class TodoUseCase extends UseCase implements todoUseCases{
    async getAll() {
        const {Repositories, Presenters} = this;
        const resume = await new Repositories.Todo().getAll();
        return new Presenters.Todo().todoResponse(resume)
    }
}

interface todoUseCases {
    getAll: () => any
}
