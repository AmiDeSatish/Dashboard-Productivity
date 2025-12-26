import style from "./TaskEditModal.module.css"
import { useContext } from "react"
import type { Task } from "../../../../types/shared"
import { EditContext } from "../TaskSection"
import notebookEmoji from "../../../../assets/appleEmoji/notebook.png"

function TaskEditModal(){
  const ctx = useContext(EditContext)
  const task = ctx.selectedTask

  return(
    <>
      <div className={style.EditModalWrapped}>
        <div className={style.EditModalContainer}>
          <header className={style.EditModalHeader}>
            <div className={style.EditModalTitle}>
              <img src={notebookEmoji}/>
              <h1>{`Task ${task.id}`}</h1>
              <img src={notebookEmoji}/>
            </div>
            <button onClick={ctx.closeEditModal} className={style.btnCloseEditModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <form className={style.EditModalForm}>

          </form>
          <footer className={style.EditModalFooter}>
            <button className={style.btnEditModal}>Edit</button>
          </footer>
        </div>
      </div>
    </>
  )
}

export default TaskEditModal