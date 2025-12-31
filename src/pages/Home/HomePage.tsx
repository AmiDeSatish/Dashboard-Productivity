import SideBar from "./Sidebar/Sidebar";
import taskSection from "./TaskSection/TaskSection"
import style from "./Home.module.css";
import TaskSection from "./TaskSection/TaskSection";
import ProjectSection from "./ProjectSection/ProjectSection.tsx"
import type { Task } from "../../types/shared";

function HomePage(){
  type Progress = "pending" | "inProgress" | "done";

  const Tasks: Task[] = [
    {
      id: 1,
      name: "Design homepage",
      category: "UI/UX",
      due: new Date("2025-12-25"),
      priority: "high",
      notif : true,
      progress: "inProgress",
    },
    {
      id: 2,
      name: "Implement authentication",
      category: "Backend",
      due: new Date("2025-12-28"),
      priority: "medium",
      notif : true,
      progress: "pending",
    },
    {
      id: 3,
      name: "Set up database",
      category: "Backend",
      due: new Date("2025-12-27"),
      priority: "high",
      notif : true,
      progress: "done",
    },
    {
      id: 4,
      name: "Create task grid component",
      category: "Frontend",
      due: new Date("2025-12-26"),
      priority: "low",
      notif : true,
      progress: "inProgress",
    },
  ];

  return(
    <>
      <div className={style.homepage}>
        <SideBar/>
        <div className={style.content}>
          <TaskSection Tasks={Tasks}/>
          <ProjectSection/>
        </div>
      </div>
      
    </>
  )
}

export default HomePage