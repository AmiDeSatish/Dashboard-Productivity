import SideBar from "./Sidebar/Sidebar";
import taskSection from "./TaskSection/TaskSection"
import style from "./Home.module.css";
import TaskSection from "./TaskSection/TaskSection";
import ProjectSection from "./ProjectSection/ProjectSection.tsx"
import type { Task, Project, CreateTaskInput } from "../../types/shared";
import { CreateTask, NextPriorityState, NextProgressState } from "../../utils.ts";
import { createContext, useState } from "react";

/**Creation of the context for the modification of the Task (passed to TaskList) */
type HandleTaskType = {
  handleProgressTask : (id : number) => void,
  handlPriorityTask : (id : number) => void,
  handleDeleteTask : (id : number) => void
}
export const HandleTask = createContext<HandleTaskType>

function HomePage(){
  type Progress = "pending" | "inProgress" | "done";

  const projects: Project[] = [
    {
      id: 1,
      color: "#4F46E5", // indigo
      due: new Date("2026-01-20")
    },
    {
      id: 2,
      color: "#16A34A", // green
      due: new Date("2026-02-05")
    },
    {
      id: 3,
      color: "#DC2626", // red
      due: new Date("2026-01-15")
    }
  ]

  const tasks: Task[] = [
    {
      id: 1,
      name: "Définir l’architecture du projet",
      due: new Date("2026-01-08"),
      notif: true,
      priority: "high",
      progress: "done",
      projectId: 1
    },
    {
      id: 2,
      name: "Créer les composants ProjectCard",
      due: new Date("2026-01-10"),
      notif: false,
      priority: "medium",
      progress: "inProgress",
      projectId: 1
    },
    {
      id: 3,
      name: "Implémenter le cercle de progression",
      due: new Date("2026-01-12"),
      notif: false,
      priority: "medium",
      progress: "pending",
      projectId: 1
    },
    {
      id: 4,
      name: "Refactor TaskList pour accepter un filtre projectId",
      due: new Date("2026-01-14"),
      notif: true,
      priority: "high",
      progress: "inProgress",
      projectId: 2
    },
    {
      id: 5,
      name: "Créer la page ProjectDetail",
      due: new Date("2026-01-18"),
      notif: false,
      priority: "medium",
      progress: "pending",
      projectId: 2
    },
    {
      id: 6,
      name: "Finaliser le design mobile",
      due: new Date("2026-01-10"),
      notif: true,
      priority: "low",
      progress: "pending",
      projectId: 3
    }
  ]

  /**Logic related to the STATEFULL var Tasks */
  const [stateTasks, setTasks] = useState<Task[]>(tasks)

  function handleDeleteTask(id : number){
    /**Delete the selected task */
    console.log("id donné :", id)
    console.log("Handle Delete clicked !")
    setTasks(t => t.filter(task => {
      return task.id !== id
    }))
  }

  function addTask (input : CreateTaskInput){
    /**Add a task */
    const newTask = CreateTask(stateTasks.length, input)
    setTasks(t => [...t, newTask])
  }

  function handleEditTask(id : number , patch : Partial<Task>){
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

  function handleProgressTask(id : number){
    setTasks(t => t.map(task => {
      if(task.id === id){
        const nextProgress = NextProgressState(task.progress)
        return {...task, progress : nextProgress}
      }
      else{return {...task}}
    }))
  }

  function handlePriorityTask(id : number){
    setTasks(t => t.map(task => {
      if(id === task.id){
        const nextPrio = NextPriorityState(task.priority)
        return({...task, priority : nextPrio})
      }
      else{
        return {...task}
      }
    }))
  }


  return(
    <>
      <div className={style.homepage}>
        <SideBar/>
        <div className={style.content}>
          <TaskSection 
            tasks={stateTasks}
            handleDeleteTask={handleDeleteTask}
            handlePriorityTask={handlePriorityTask}
            handleProgressTask={handleProgressTask}
            handleEditTask={handleEditTask}
          />
          <ProjectSection 
            tasks={tasks}
            projects={projects}
          />
        </div>
      </div>
      
    </>
  )
}

export default HomePage