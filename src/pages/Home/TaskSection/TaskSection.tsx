import {useState} from "react"

import style from "./TaskSection.module.css"

import TaskHeader from "./header/TaskHeader.tsx"
import TaskSubHeader from "./subheader/TaskSubHeader.tsx"
import TaskList from "./TaskList/TaskList.tsx"

import type {Filter} from "../../../types/tasks.ts"
import type {Task} from "../../../types/shared.ts"


type TaskSectionProps = {
  Tasks? : Task[]
}

function TaskSection({Tasks = []}:TaskSectionProps){

  const [stateTasks,setTasks] = useState<Task[]>(Tasks)

  const [isWatching, setIsWatching] = useState<boolean>(true)
  function toggleWatching(){
    console.log("Arrow cliqué !")
    setIsWatching(w => !w)
  }

  const [filter,setFilter] = useState<Filter>("all")
  function handleFilter(inf){
    setFilter(inf)
  }

  return(
    <>
      <div className={style.taskWrapper}>
        <TaskHeader 
          isWatching = {isWatching}
          toggleWatching = {toggleWatching}
        />
        {isWatching && <TaskSubHeader
                          filter = {filter}
                          handleFilter = {handleFilter}
                        />
        }
        {isWatching && <TaskList
                          filter= {filter}
                          tasks = {stateTasks}
                          setTasks = {setTasks}
                        />
        }
      </div>
      
    </>
  )
}

export default TaskSection