import { ITodo } from "./ITodo";
import { IUser } from "./IUser";

export interface IList{
    id ?: number;
    title: string;
    owner: IUser;
    todos: ITodo[]
}