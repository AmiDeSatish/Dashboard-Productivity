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

function ddMMyy(date){
  return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
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

export {UpString,ddMMyy,NextProgressState, NextPriorityState,CreateTask}