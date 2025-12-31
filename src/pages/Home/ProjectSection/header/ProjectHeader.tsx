import style from "./ProjectHeader.module.css"
import pinsLogo from "../../../../assets/appleEmoji/task.png"
import arrowIcon from "../../../../assets/arrowDown.png"

type ProjectHeaderProps = {
  isWatching : boolean,
  openProjectList : () => void
}

function ProjectHeader({isWatching, openProjectList} :ProjectHeaderProps){

  return(
    <>
      <div className={style.projectHeader}>
        <div className={style.HeaderLeft}>
          <img  src={pinsLogo}/>
          <h1>Project</h1>
        </div>
        <button onClick={openProjectList} className={style.arrowButton}>
          <img src={arrowIcon} className={`${isWatching? style.open : ""}`}/>
        </button>
      </div>
    </>
  )
}

export default ProjectHeader