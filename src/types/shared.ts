type Progress = "pending" | "inProgress" | "done" 
type Priority = "low" | "medium" | "high"

type Task = {
  id : number,
  name : string,
  category : string,
  due : Date,
  notif : boolean,
  priority : Priority,
  progress : Progress
  project? : Project
}

type Project = {
  id : number,
  tasks? : Task[]
}

type CreateTaskInput = {
  name : string,
  category? : string,
  due? : Date,
  priority? : Priority,
  color? : string,
  progress? : Progress
  project? : Project
}

export type {Task, Progress, Priority, Project, CreateTaskInput}