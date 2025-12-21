import {useState} from "react"

import style from "./TaskSection.module.css"

import TaskHeader from "./header/TaskHeader.tsx"
import TaskSubHeader from "./subheader/TaskSubHeader.tsx"

type Task = {
  id : number,
  name : string,
  category : string,
  due : Date,
  priority : string,
  progress : string
}

type TaskSectionProps = {
  tasks? : Task[]
}

function TaskSection({tasks = []}:TaskSectionProps){

  const [isWatching, setIsWatching] = useState<boolean>(true)

  function toggleWatching(){
    console.log("Arrow cliqué !")
    setIsWatching(w => !w)
  }

  return(
    <>
      <div className={style.taskWrapper}>
        <TaskHeader 
          isWatching = {isWatching}
          toggleWatching = {toggleWatching}
        />
        {isWatching && <TaskSubHeader/>}
      </div>
      
    </>
  )
}

export default TaskSection