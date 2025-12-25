import style from "./TaskEditModal.module.css"
import { useContext } from "react"
import type { Task } from "../../../../types/shared"
import { EditContext } from "../TaskSection"

function TaskEditModal(){
  const ctx = useContext(EditContext)

  return(
    <>
      <div className={style.modalWrapped}>

      </div>
    </>
  )
}

export default TaskEditModal