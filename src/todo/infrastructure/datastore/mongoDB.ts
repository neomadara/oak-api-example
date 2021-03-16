import { MongoClient } from "https://deno.land/x/mongo@v0.22.0/mod.ts";

const client = new MongoClient();
await client.connect("mongodb://127.0.0.1:27017");

const DB = client.database("todosapp");

export default DB
