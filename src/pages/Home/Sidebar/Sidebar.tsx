import {useState} from "react"

import SideBarProfileSection from "../SideBarProjectSection/ProjectSection"

import profilePic from "../../../assets/profilpic.jfif"
import dashboardIcon from "./dashboard.png"
import inboxIcon from "./inbox.png"
import workEmoji from "../../../assets/appleEmoji/work.png"
import houseEmoji from "../../../assets/appleEmoji/house.png"

import style from "./Sidebar.module.css"

function SideBar(){

  const [username,seUsertName] = useState<string>("Thibault")
  const [email, setEmail] = useState<string>("tbone_92@outlook.fr")

  const projectsTest = [
    {id : 1, name : "Personnal", logo : houseEmoji},
    {id : 2, name : "Work", logo : workEmoji}
  ]
  return(
    <>
      <div className={style.container}>
        <div className={style.profil}>
          <img className={style.profilPicture} src={profilePic}/>
          <div className={style.profilInfo}>
            <p className={style.profilUserName}>{username}</p>
            <p className={style.profilEmail}>{email}</p>
          </div>
        </div>
        <div className={style.dashboardInboxContainer}>
          <button className={style.dashboardContainer}>
            <div className={style.dashboardLeft}>
              <img className={style.dashboardIcon} src={dashboardIcon}/>
              <span>Dashboard</span>
            </div>
            <div className={style.dashboardNotif}></div>
          </button>
          <button className={style.inboxContainer}>
            <div className={style.inboxLeft}>
              <img className={style.inboxIcon} src={inboxIcon}/>
              <span>Inbox</span>
            </div>
            <div className={style.inboxNotif}></div>
          </button>
        </div>
        <SideBarProfileSection projects = {projectsTest}/>
      </div>
    </>
  )
}

export default SideBar