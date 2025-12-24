import SideBar from "./Sidebar/Sidebar";
import taskSection from "./TaskSection/TaskSection"
import style from "./Home.module.css";
import TaskSection from "./TaskSection/TaskSection";
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
      color: "#ff6b6b", // rouge pour haute priorité
      progress: "inProgress",
    },
    {
      id: 2,
      name: "Implement authentication",
      category: "Backend",
      due: new Date("2025-12-28"),
      priority: "medium",
      color: "#feca57", // jaune pour priorité moyenne
      progress: "pending",
    },
    {
      id: 3,
      name: "Set up database",
      category: "Backend",
      due: new Date("2025-12-27"),
      priority: "high",
      color: "#ff6b6b",
      progress: "done",
    },
    {
      id: 4,
      name: "Create task grid component",
      category: "Frontend",
      due: new Date("2025-12-26"),
      priority: "low",
      color: "#1dd1a1", // vert pour faible priorité
      progress: "inProgress",
    },
  ];

  return(
    <>
      <div className={style.homepage}>
        <SideBar/>
        <div className={style.content}>
          <TaskSection Tasks={Tasks}/>
        </div>
      </div>
      
    </>
  )
}

export default HomePage