import SideBar from "./Sidebar/Sidebar";
import taskSection from "./TaskSection/TaskSection"
import style from "./Home.module.css";
import TaskSection from "./TaskSection/TaskSection";


function HomePage(){
  return(
    <>
      <div className={style.homepage}>
        <SideBar/>
        <div className={style.content}>
          <TaskSection/>
        </div>
      </div>
      
    </>
  )
}

export default HomePage