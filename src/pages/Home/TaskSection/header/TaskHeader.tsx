import style from "./TaskHeader.module.css"
import { useState } from "react"

import arrowIcon from "../../../../assets/arrowDown.png"
import taskEmoji from "../../../../assets/appleEmoji/task.png"

type HeaderProps = {
  isWatching : boolean
  toggleWatching : void
}

function TaskHeader({isWatching,toggleWatching} : HeaderProps){

  return(
    <>
      <div className={style.taskHeader}>
        <div className={style.taskHeaderLeft}>
          <img src={taskEmoji}/>
          <h2>Task</h2>
        </div>
        <button onClick={toggleWatching} className={style.arrowButton}>
          <img src = {arrowIcon} className={`${style.arrowImage} ${isWatching? style.open : ""}`}/>
        </button>
      </div>
    </>
  )
}

export default TaskHeader