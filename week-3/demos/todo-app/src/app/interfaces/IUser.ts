export interface IUser {
    id ?: number; // We don't have Ids right now, we'll clean this up once we start communicating with a backend
    username: string;
    password: string;
}