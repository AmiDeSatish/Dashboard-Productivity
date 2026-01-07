import style from "./TaskEditModal.module.css"
import { useState,useContext } from "react"
import type {Progress, Priority, Task, Project } from "../../../../types/shared.ts"
import { EditTaskContext } from "../TaskSection.tsx"
import lowEmoji from "../../../../assets/appleEmoji/low.png"
import mediumEmoji from "../../../../assets/appleEmoji/medium.png"
import highEmoji from "../../../../assets/appleEmoji/high.png"
import pendingEmoji from "../../../../assets/appleEmoji/snooze.png"
import inProgressEmoji from "../../../../assets/appleEmoji/inProgress.png"
import doneEmoji from "../../../../assets/appleEmoji/done.png"
import arrow from "../../../../assets/arrowUp.png"
import notebookEmoji from "../../../../assets/appleEmoji/notebook.png"

import { UpString } from "../../../../utils.ts"
import {ddMMyy} from "../../../../utils.ts"

function TaskEditModal(){
  const ctx = useContext(EditTaskContext)
  const originalTask = ctx?.selectedTask

  {/*const [editedTask, setEditedTask] = useState<Task>(ctx.selectedTask)*/}
  const [name, setName] = useState<string>("");
  const [progress, setProgress] = useState<Progress>(ctx.selectedTask.progress)
  const [priority, setPriority] = useState<Priority>(ctx.selectedTask.priority)
  const [project,setProject] = useState<Project>(ctx?.selectedTask.project)
  const [date, setDate] = useState<string>(
  ctx.selectedTask.due
    ? ctx.selectedTask.due.toISOString().slice(0, 10)
    : ""
  )
  const [category, setCategory] = useState<string>("");
  const [notifOn,setNotifOn] = useState<boolean>(ctx.selectedTask.notif)

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
    setDate(e.target.value)
  }
  function handleNameChange(e){
    setName(e.target.value)
  }
  function handleProjectChange(e){
    setProject(e.target.value)
  }
  function handleCategoryChange(e){
    setCategory(e.target.value)
  }
  function handleNotifChange(){
    setNotifOn(!notifOn)
  }
  function handleCancel(){
    setName(originalTask.name)
    setCategory(originalTask.category)
    setProject(originalTask?.project)
    setDate(originalTask.due)
    setNotifOn(originalTask.notif)
    setPriority(originalTask.priority)
    setProgress(originalTask.progress)
  }

  {/*
    Logic for changing the priority of the edited task.
  */}
  function leftArrowPrio(){
    const index : number = prio.indexOf(priority)
    if(index > 0){
      setPriority(prio[index - 1])
    }
    else{
      setPriority(prio[prio.length - 1])
    }
  }

  function rightArrowPrio(){
    const index : number = prio.indexOf(priority)
    if(index < prio.length - 1){
      setPriority(prio[index + 1])
    }
    else{
      setPriority(prio[0])
    }
  }

  {/*
  Logic to modify the progress of the task is needed
    */}
  function leftArrowProgress(){
    const index : number = progr.indexOf(progress)
    if (index > 0) {
      setProgress(progr[index - 1])
    }
    else{
      setProgress(progr[progr.length - 1])
    }
  }

  function rightArrowProgress(){
    console.log("riht arrow clicked")
    const index = progr.indexOf(progress)
    if(index < progr.length - 1){
      setProgress(progr[index + 1])
    }
    else{
      setProgress(progr[0])
    }
  }

  {/*Function to edit the modification given to the task */}
  function handleEdit(){
    let patch  : Partial<Task> = {}
    if(name !== "" && name !== originalTask?.name){patch.name = name}
    if(category !== undefined && category !== originalTask?.category){patch.category = category}
    if(progress !== undefined && progress !== originalTask?.progress){patch.progress = progress}
    if(priority !== undefined && priority !== originalTask?.priority){patch.priority = priority}
    if(project !== undefined && project !== originalTask?.project){patch.project = project}
    if (date !== "" && date !== originalTask.due.toISOString().slice(0, 10)) {patch.due = new Date(date)}
    if(notifOn !== undefined && notifOn !== originalTask?.notif){patch.notif = notifOn}

    ctx?.handleEditTask(originalTask.id,patch)
    ctx?.closeEditModal()
  }

  return(
    <>
      <div className={style.ModalBackground} onClick={ctx.closeEditModal}></div>
      <div className={style.EditModalWrapped}>
        <div className={style.EditModalContainer}>
          <form className={style.TaskEssentialContainer}>
            <header className={style.header}>
              <h2>Task Essential</h2>
              <button onClick={ctx.closeEditModal} className={style.btnCloseEditModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </header>
            <div className={`${style.field} ${style.fieldName}`}>
              <span className={`${style.fieldLabel} ${style.fieldLabelName}`}>Name</span>
              <input onChange={(e) => handleNameChange(e)} placeholder={originalTask.name} value={name} type="text"/>
            </div>
            <div className={`${style.field} ${style.fieldProject}`}>
              <span className={`${style.fieldLabel} ${style.fieldLabelProject}`}>Project</span>
              <input value={project} onChange={(e) => handleProjectChange(e)} placeholder="No project affiliated yet" type="text"/>
            </div>
            <div className={`${style.field} ${style.fieldCategory}`}>
              <span className={`${style.fieldLabel} ${style.fieldLabelCategory}`}>Category</span>
              <input value={category} onChange={(e) => handleCategoryChange(e)} placeholder={originalTask.category} type="text"/>
            </div>

            <footer className={style.footer}>
              <button type="button" onClick={handleCancel}>Cancel</button>
              <button type="button" onClick={handleEdit}>Save</button>
            </footer>
          </form>
          
          <div className={style.right}>
            <div className={style.TaskStateContainer}>
              <header className={style.headerState}>
                <h2>Task State</h2>
                <button onClick={ctx.closeEditModal} className={style.btnCloseEditModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </header>

              <div className={style.content}>
                <div className={style.champ}>
                  <button onClick={leftArrowProgress} className={style.leftArrow}>
                    <img src={arrow}/>
                  </button>
                  <div className={`${style.fieldRound} ${style[`fieldRound${UpString(progress)}`]}`}>
                    <span className={`${style.fieldRoundLabel} ${style[`fieldRoundLabel${UpString(progress)}`]}`}>Progress</span>
                    <img src={emojiProgressMap[progress]}/>
                  </div>
                  <button onClick={rightArrowProgress} className={style.rightArrow}>
                    <img src={arrow}/>
                  </button>
                </div>
                <div className={style.champ}>
                  <button onClick={leftArrowPrio} className={style.leftArrow}>
                    <img src={arrow}/>
                  </button>
                  <div className={`${style.fieldRound} ${style[`fieldRound${UpString(priority)}`]}`}>
                    <span className={`${style.fieldRoundLabel} ${style[`fieldRoundLabel${UpString(priority)}`]}`}>Priority</span>
                    <img src={emojiPrioMap[priority]}/>
                  </div>
                  <button onClick={rightArrowPrio} className={style.rightArrow}>
                    <img src={arrow}/>
                  </button>
                </div>
              </div>
            </div>

            <div className={style.TaskTemporalityContainer}>
              <header className={style.headerTemporality}>
                <h2>Task Temporality</h2>
                <button onClick={ctx.closeEditModal} className={style.btnCloseEditModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </header>

              <div className={style.content}>
                <div className={`${style.field} ${style.fieldDate}`}>
                  <span className={`${style.fieldLabel} ${style.fieldLabelDate}`}>Due date</span>
                  <input onChange={(e) => handleDueChange(e)} value={date} type="date"/>
                </div>

                <div className={`${style.field} ${style.fieldNotif}`}>
                  <span className={`${style.fieldLabel} ${style.fieldLabelNotif}`}>Notif</span>
                  <div className={`${notifOn? style.switchOn : style.switchOff}`}>
                    <div onClick={handleNotifChange} className={`${style.round} ${notifOn? style.on : style.off}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default TaskEditModal