export default interface TodoSchema {
    _id: { $oid: string };
    title?: string;
    desc?: string;
    completed?: boolean;
}
