type Progress = "pending" | "inProgress" | "done" 
type Priority = "low" | "medium" | "high"

type Task = {
  id : number,
  name : string,
  category : string,
  due : Date,
  priority : Priority,
  color : string,
  progress : Progress
}

export type {Task, Progress, Priority}