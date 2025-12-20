import {useState} from "react"

import style from "./TaskSection.module.css"

import arrowIcon from "../../../assets/arrowDown.png"
import taskEmoji from "../../../assets/appleEmoji/task.png"

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

  function handleTasksPrint(){
    console.log("Arrow cliqué !")
    setIsWatching(w => !w)
  }

  return(
    <>
      <div className={style.taskContainer}>
        <div className={style.taskHeader}>
          <div className={style.taskHeaderLeft}>
            <img src={taskEmoji}/>
            <h2>Task</h2>
          </div>
          <button onClick={handleTasksPrint} className={style.arrowButton}>
            <img src = {arrowIcon} className={`${style.arrowImage} ${isWatching? style.open : ""}`}/>
          </button>
          
        </div>
      </div>
    </>
  )
}

export default TaskSection