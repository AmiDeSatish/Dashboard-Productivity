import {useState,useContext, createContext} from "react"

import style from "./TaskSection.module.css"

import TaskHeader from "./header/TaskHeader.tsx"
import TaskSubHeader from "./subheader/TaskSubHeader.tsx"
import TaskList from "./TaskList/TaskList.tsx"
import TaskEditModal from "./editModal/TaskEditModal.tsx"

import type {Filter} from "../../../types/tasks.ts"
import type {Priority, Progress, Task, Project,CreateTaskInput} from "../../../types/shared.ts"

import { CreateTask } from "../../../utils.ts"

type TaskSectionProps = {
  Tasks? : Task[]
}

type EditContextType = {
  closeEditModal : () => void,
  editTask : (id : number, patch : Partial<Task>) => void
}

export const EditContext = createContext<EditContextType | null>(null)

function TaskSection({Tasks = []}:TaskSectionProps){
  const [stateTasks,setTasks] = useState<Task[]>(Tasks)

  {/*State Variable, setter and function for adding a task.
    Is given to TaskAddModal via props.
  */}
  const [isAddModal, setAddModal] = useState<boolean>(false)

  function addTask (input : CreateTaskInput){
    const newTask = CreateTask(stateTasks.length, input)
    setTasks(t => [...t, newTask])
  }

  {/*State Variable, setter and function for displaying and editing or not the edit modal of a task.
    Is given to TaskEditModal via useContext (bc drill 2 layers)
  */}
  const [isEditModal, setEditModal] = useState<boolean>(false)

  function openEditModal(){
    setEditModal(true)
  }

  function closeEditModal(){
    setEditModal(false)
  }

  function editTask(id : number , patch : Partial<Task>){
    const cleanPatch = Object.fromEntries(Object.entries(patch).filter(([_,field]) => field !== undefined))
    setTasks(t => t.map(task => {
      if(id === task.id){
        return {...task, ...cleanPatch}
      }
      else{
        return {...task}
      }
    }))
  }

  {/*Variable d'état et setter pour l'affichage ou non des tasks*/}
  const [isWatching, setIsWatching] = useState<boolean>(true)
  function toggleWatching(){
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
  */}
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
        {isEditModal && 
          <EditContext.Provider value={{
            closeEditModal,
            editTask,
          }}>
            <TaskEditModal />
          </EditContext.Provider>
        }
      </div>
      
    </>
  )
}

export default TaskSection