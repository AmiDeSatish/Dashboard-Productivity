import type {Priority, Progress, CreateTaskInput, Task} from "./types/shared.ts"

function UpString(str : string) : string{
  let result = ""
  
  for(let i = 0; i< str.length; i++){
    if(i === 0){
      result+= str[i].toUpperCase()
    }
    else if(str[i] === " " && i+1<str.length){
      result += " "
      result += str[i+1].toUpperCase()
      i += 1
    }
    else{
      result += str[i]
    }
  }
  return result
}

function ddMMyy(date : Date){
  let day = date.getDate().toString()
  let month = (date.getMonth() + 1).toString()
  let year = date.getFullYear()
  if(day.length < 2){day = "0" + day}
  if(month.length < 2){month = "0" + month}
  return day + "/" + month + "/" + year
  {/** return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`*/}
}

function NextProgressState(state : Progress) : Progress{
  const states : Progress[] = ["pending","inProgress","done"]
  const index = states.indexOf(state)
  if(index === states.length - 1){
    return states[0]
  }
  return states[index + 1]

}

function NextPriorityState(currentPrio : Priority) : Priority{
  const priorities : Priority[] = ["low","medium","high"]
  const index = priorities.indexOf(currentPrio)

  if(index === priorities.length -1){
    return priorities[0]
  }
  return priorities[index + 1]
}

function CreateTask(id : number ,input : CreateTaskInput) : Task{
  return {
    id : id,
    name : input.name ?? "Simple Task",
    categoryId : input.categoryId ?? 1,
    due : input.due ?? new Date(),
    priority : input.priority ?? "low",
    progress : input.progress ?? "pending",
    projectId : input.projectId,
    notif : input.notif
  }
}

function DarkenColor(color : string) : string {
  if(color.length === 7 && color[0] === "#"){
    try {
      let r = Math.round(parseInt(color[1]+color[2],16)*0.75).toString(16)
      let g = Math.round(parseInt(color[3]+color[4],16)*0.75).toString(16)
      let b = Math.round(parseInt(color[5]+color[6],16)*0.75).toString(16)
      if(r.length < 2){r = "0" + r}
      if(g.length < 2){g = "0" + g}
      if(b.length < 2){b = "0" + b}
      return "#" + r + g + b

    } catch (error) {
      console.log("Color given : ", color)
      return color
    }
  }
  console.log("The function DarkenColor only accepts hex color format.")
  return color
}

function ProjectTasks(id : number, tasks : Task[]) : Task[]{
  /**
   * Give all the related task of a project.
   *  - id : Project id
   *  - tasks : all the tasks
   */
  const rightTasks =  tasks.filter(task => task.projectId === id)
  return rightTasks
}

function ProjectProgress(tasks : Task[]) : number {
  /**
    Calculate the progress (in %) of the given Project.
    - tasks : List of the tasks related to the project.
  */
  if(tasks.length > 0){
    try {
      let sum = 0
      const nb = tasks.length
      tasks.forEach(task => {
        if(task.progress === "done"){sum += 1}
        if(task.progress === "pending"){sum += 0}
        if(task.progress === "inProgress"){sum += 0.5}
      })
      return (sum/nb)*100
    } catch (error) {
      console.log("Error in the Project's % calculus")
      return 0
    }
  }
  console.log("The arg tasks is empty.")
  return 0
}


export {UpString,ddMMyy,NextProgressState, NextPriorityState,CreateTask, DarkenColor, ProjectProgress, ProjectTasks}