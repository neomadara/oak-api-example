import Repository from "../registry/repository.interface-adapter.ts";
import "https://deno.land/x/dotenv/load.ts";
import DB from "../infrastructure/datastore/mongoDB.ts";
import TodoSchema from "../domain/model.ts";

export class TodoRepository extends Repository implements todoRepositoryInterface{
    async getAll() {
        const todoRepository = DB.collection<TodoSchema>("todos")
        return todoRepository.find({}).toArray();
    }
}

interface todoRepositoryInterface {
    getAll: () => Promise<TodoSchema[]>
}
