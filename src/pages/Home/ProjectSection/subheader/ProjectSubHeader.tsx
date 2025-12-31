import style from "./ProjectSubHeader.module.css"

type ProjectSubHeaderProps = {
  filter : string,
  handleFilter : (info : string) => void
}

function ProjectSubHeader({filter, handleFilter} :ProjectSubHeaderProps){

  return(
    <>
      <div className={style.subheaderWrapper}>
        <div className={style.SubHeaderContainer}>
          <div className={style.filterPart}>
            <button onClick={() => handleFilter("AllFilter")} className={`${style.filterBtn} ${filter === "AllFilter"? style.clicked : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>All Projects</span>
            </button>
            <button onClick={() => handleFilter("PriorityFilter")} className={`${style.filterBtn} ${filter === "PriorityFilter"? style.clicked : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <span>Priority</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectSubHeader