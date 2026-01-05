type Progress = "pending" | "inProgress" | "done" 
type Priority = "low" | "medium" | "high"

type Task = {
  id : number,
  name : string,
  due : Date,
  notif : boolean,
  priority : Priority,
  progress : Progress,
  categoryId? : number,
  projectId? : number
}

type Project = {
  id : number,
  color : string,
  due :  Date,
  tasks? : Task[]
  categoryId? : number
}

type Category = {
  id : number,
  name : string,
  logo : string
}

type CreateTaskInput = {
  name : string,
  due? : Date,
  priority? : Priority,
  progress? : Progress,
  notif : boolean,
  projectId? : number,
  categoryId? : number
}

export type {Task, Progress, Priority, Project, CreateTaskInput}