import {useState,useContext, createContext} from "react"

import style from "./TaskSection.module.css"

import TaskHeader from "./header/TaskHeader.tsx"
import TaskSubHeader from "./subheader/TaskSubHeader.tsx"
import TaskList from "./TaskList/TaskList.tsx"
import TaskEditModal from "./editModal/TaskEditModal.tsx"

import type {Filter} from "../../../types/tasks.ts"
import type {Priority, Progress, Task, Project,CreateTaskInput, TaskUI} from "../../../types/shared.ts"
import { UpString, ddMMyy,NextProgressState, NextPriorityState} from "../../../utils.ts"


import { CreateTask } from "../../../utils.ts"

type TaskSectionProps = {
  tasks? : Task[],
  tasksUI : TaskUI[],
  selectedTask : Task | null,
  handleDeleteTask : (id : number) => void,
  handlePriorityTask : (id : number) => void,
  handleProgressTask : (id : number) => void,
  handleEditTask : (id : number, patch : Partial<Task>) => void,
  handleChangeTaskID : (id : number) => void
}

function TaskSection({tasks,tasksUI,selectedTask,handleDeleteTask,handlePriorityTask,handleProgressTask,handleEditTask,handleChangeTaskID}:TaskSectionProps){
  
  const [isAddModal, setAddModal] = useState<boolean>(false)
  const [filter, setFilter] = useState<Filter>("all")

  {/*State Variable, setter and function for displaying and editing or not the edit modal of a task.
    Is given to TaskEditModal via useContext (bc drill 2 layers)
  */}
  const [isEditModal, setEditModal] = useState<boolean>(false)

  function openEditModal(taskID : number) : void{
    console.log("Btn edit clicked")
    setEditModal(true)
    handleChangeTaskID(taskID)
  }

  function closeEditModal(){
    setEditModal(false)
  }

  const [isWatching, setIsWatching] = useState<boolean>(true)
  function toggleWatching() : void{
    console.log("Arrow cliqué !")
    setIsWatching(w => !w)
  }

  {/*Variable d'etat et setter pour le choix de l'affichage des tasks
    ***************************************
    ***************************************
    A IMPLEMENTER UNE FOIS LE BACK END FAIT 
    ***************************************
    ***************************************

    PS : Créer un type Filter dans un sous dossier filter.ts de /types

    const [filter,setFilter] = useState<Filter>("all")
    function handleFilter(inf){
      setFilter(inf)
    }
  */}
  function handleFilter(fil : Filter){
    setFilter(fil)
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
                          tasks={tasks}
                          selectedTask={selectedTask}
                          tasksUI={tasksUI}
                          filter= {filter}
                          openEditModal={openEditModal}
                          handleEditTask={handleEditTask}
                          handleDeleteTask={handleDeleteTask}
                          handlePriorityTask={handlePriorityTask}
                          handleProgressTask={handleProgressTask}
                          handleChangeTaskID={handleChangeTaskID}
                        />
        }
        {isEditModal && selectedTask && <TaskEditModal
                          selectedTask={selectedTask}
                          onClose={closeEditModal}
                          handleEditTask={handleEditTask}
                        />
        }
      </div>
    </>
  )
}

export default TaskSection