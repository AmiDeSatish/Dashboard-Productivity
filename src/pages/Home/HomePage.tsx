import SideBar from "./Sidebar/Sidebar";
import taskSection from "./TaskSection/TaskSection"
import style from "./Home.module.css";
import TaskSection from "./TaskSection/TaskSection";
import ProjectSection from "./ProjectSection/ProjectSection.tsx"
import type { Task, Project } from "../../types/shared";

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


  return(
    <>
      <div className={style.homepage}>
        <SideBar/>
        <div className={style.content}>
          <TaskSection Tasks={tasks}/>
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