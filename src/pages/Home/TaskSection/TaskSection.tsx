import {useState,useContext, createContext} from "react"

import style from "./TaskSection.module.css"

import TaskHeader from "./header/TaskHeader.tsx"
import TaskSubHeader from "./subheader/TaskSubHeader.tsx"
import TaskList from "./TaskList/TaskList.tsx"
import TaskEditModal from "./editModal/TaskEditModal.tsx"

import type {Filter} from "../../../types/tasks.ts"
import type {Priority, Progress, Task, Project,CreateTaskInput} from "../../../types/shared.ts"
import { UpString, ddMMyy,NextProgressState, NextPriorityState} from "../../../utils.ts"


import { CreateTask } from "../../../utils.ts"

type TaskSectionProps = {
  tasks? : Task[],
  handleDeleteTask : (id : number) => void,
  handlePriorityTask : (id : number) => void,
  handleProgressTask : (id : number) => void,
  handleEditTask : (id : number, patch : Partial<Task>) => void
}

type EditTaskContextType = {
  selectedTask: Task | null
  openEditModal: (task: Task) => void
  closeEditModal: () => void
  handleEditTask : (id : number, patch : Partial<Task>) => void
}

export const EditTaskContext = createContext<EditTaskContextType | null>(null)

function TaskSection({tasks,handleDeleteTask,handlePriorityTask,handleProgressTask,handleEditTask}:TaskSectionProps){
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isAddModal, setAddModal] = useState<boolean>(false)
  const [filter, setFilter] = useState<Filter>("all")

  {/*State Variable, setter and function for displaying and editing or not the edit modal of a task.
    Is given to TaskEditModal via useContext (bc drill 2 layers)
  */}
  const [isEditModal, setEditModal] = useState<boolean>(false)

  function openEditModal(task : Task) : void{
    console.log("Btn edit clicked")
    setEditModal(true)
    setSelectedTask(task)
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
      <EditTaskContext.Provider value={{
            openEditModal,
            selectedTask,
            closeEditModal,
            handleEditTask
          }}>
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
                          filter= {filter}
                          handleEditTask={handleEditTask}
                          handleDeleteTask={handleDeleteTask}
                          handlePriorityTask={handlePriorityTask}
                          handleProgressTask={handleProgressTask}
                        />
        }
        {isEditModal && <TaskEditModal/>
        }
      </div>
      </EditTaskContext.Provider>
    </>
  )
}

export default TaskSection