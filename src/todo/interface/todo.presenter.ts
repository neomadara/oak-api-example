import Presenter from "../registry/presenter.interface-adapter.ts";

export class TodoPresenter extends Presenter implements todoPresenter{
    todoResponse(resume: any) {
        return resume
    }
}

interface todoPresenter {
    todoResponse: (resume: any) => any
}
