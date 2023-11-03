import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceOptions } from "./course";

export const adminJsResoucers: ResourceWithOptions[] =[
  {
    resource: Category,
    options: categoryResourceOptions
  },{
    resource: Course,
    options: courseResourceOptions
  }
]