import style from "./TaskEditModal.module.css"
import { useState,useContext } from "react"
import type {Progress, Priority, Task } from "../../../../types/shared"
import { EditContext } from "../TaskSection"
import lowEmoji from "../../../../assets/appleEmoji/low.png"
import mediumEmoji from "../../../../assets/appleEmoji/medium.png"
import highEmoji from "../../../../assets/appleEmoji/high.png"
import pendingEmoji from "../../../../assets/appleEmoji/snooze.png"
import inProgressEmoji from "../../../../assets/appleEmoji/inProgress.png"
import doneEmoji from "../../../../assets/appleEmoji/done.png"
import notebookEmoji from "../../../../assets/appleEmoji/notebook.png"

import { UpString } from "../../../../utils.ts"
import {ddMMyy} from "../../../../utils.ts"

function TaskEditModal(){
  const ctx = useContext(EditContext)
  const [editedTask, setEditedTask] = useState<Task>(ctx.selectedTask)
  const prio : Priority[] = ["low","medium","high"]
  const emojiPrioMap : Record<Priority,string> = {
    low : lowEmoji,
    medium : mediumEmoji,
    high : highEmoji
  }
  const progr : Progress[] = ["pending","inProgress","done"]
  const emojiProgressMap : Record<Progress,string> = {
    pending : pendingEmoji,
    inProgress : inProgressEmoji,
    done : doneEmoji
  }

  function handleDueChange(e){
    setEditedTask(t => ({...t, due : (e.target.value)}))
  }
  function handleNameChange(e){
    setEditedTask(t => ({...t, name : e.target.value}))
  }
  function handleProjectChange(e){
    setEditedTask(t => ({...t, project : e.target.value}))
  }
  function handleCategoryChange(e){
    setEditedTask(t => ({...t, category : e.target.value}))
  }
  function handleColorChange(e){
    setEditedTask(t => ({...t, color : e.target.value}))
  }

  {/*
    Logic for changing the priority of the edited task.
  */}
  function leftArrowPrio(){
    const index : number = prio.indexOf(editedTask.priority)
    if(index > 0){
      setEditedTask(t => ({...t, priority : prio[index - 1]}))
    }
    else{
      setEditedTask(t => ({...t, priority : prio[prio.length - 1]}))
    }
  }

  function rightArrowPrio(){
    const index : number = prio.indexOf(editedTask.priority)
    if(index < prio.length - 1){
      setEditedTask(t => ({...t,priority : prio[index + 1]}))
    }
    else{
      setEditedTask(t => ({...t,priority : prio[0]}))
    }
  }

  {/*
  Logic to modify the progress of the task is needed
    */}
  function leftArrowProgress(){
    const index : number = progr.indexOf(editedTask.progress)
    if (index > 0) {
      setEditedTask(t => ({...t, progress : progr[index - 1]}))
    }
    else{
      setEditedTask(t => ({...t,progress : progr[progr.length - 1]}))
    }
  }

  function rightArrowProgress(){
    const index = progr.indexOf(editedTask.progress)
    if(index < progr.length - 1){
      setEditedTask(t => ({...t, progress : progr[index + 1]}))
    }
    else{
      setEditedTask(t=>({...t, progress : progr[0]}))
    }
  }

  return(
    <>
      <div className={style.EditModalWrapped}>
        <div className={style.EditModalContainer}>
          <header className={style.EditModalHeader}>
            <div className={style.EditModalTitle}>
              <img src={notebookEmoji}/>
              <h1>{`Task ${editedTask.id}`}</h1>
              <img src={notebookEmoji}/>
            </div>
            <button onClick={ctx.closeEditModal} className={style.btnCloseEditModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <form className={style.EditModalForm}>
            <div className={style.FormFirstRow}>
              <div className={style.field}>
                <span className={style.fieldLabel}>Name</span>
                <input value={editedTask.name} onChange={(e) => handleNameChange(e)} placeholder={editedTask.name} type="text"></input>
              </div>
            </div>
            <div className={style.FormSecondRow}>
              <div className={style.champ}>
                <h2>Project :</h2>
                <input value={editedTask.project} onChange={(e) => handleProjectChange(e)} placeholder={editedTask.project} type="text"></input>
              </div>
              <div className={style.champ}>
                <h2>Category :</h2>
                <input value={editedTask.category} onChange={(e) => handleCategoryChange(e)} placeholder={editedTask.category} type="text"></input>
              </div>
            </div>
            <div className={style.FormThirdRow}>
              <div className={style.champ}>
                <h2>{`Priority : ${UpString(editedTask.priority)}`}</h2>
                <div className={style.champClickable}>
                  <button type="button" className={style.leftArrow} onClick={leftArrowPrio}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <img src={emojiPrioMap[editedTask.priority]}/>
                  <button type="button" className={style.rightArrow} onClick={rightArrowPrio}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className={style.champ}>
                <h2>{`Progress : ${UpString(editedTask.progress)}`}</h2>
                <div className={style.champClickable}>
                  <button type="button" className={style.leftArrow} onClick={leftArrowProgress}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <img src={emojiProgressMap[editedTask.progress]}/>
                  <button type="button" className={style.rightArrow} onClick={rightArrowProgress}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className={style.FormFourthRow}>
              <div className={style.champ}>
                <h2>Color</h2>
                <input value={editedTask.color ?? ""} onChange={(e) => handleColorChange(e)} type="color"></input>
              </div>
              <div className={style.champ}>
                <h2>Due date</h2>
                <input value={editedTask.due} onChange={(e) => handleDueChange(e)} type="date"></input>
              </div>
            </div>
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