//In TS entities are defines inside an interface
//When we get the list from API we have to store it inside an array of the entity type defined in the interface

import { Department } from "../Departments/department";
import { Gender } from "./gender";

export interface Employee {
    id : number,
    name : string,
    dateOfBirth : Date,
    gender : Gender,
    mobileNo : number,
    email : string,
    salary : number,
    departmentId : Number,
    department : Department
}
