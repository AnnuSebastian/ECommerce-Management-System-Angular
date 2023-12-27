import { Role } from "./role";

export interface User {
    id : number,
    userName : String,
    email : String,
    password : String,
    role : Role
}
