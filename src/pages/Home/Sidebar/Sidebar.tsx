import {useState} from "react"
import profilePic from "../../../assets/profilpic.jfif"
import dashboardIcon from "./dashboard.png"
import inboxIcon from "./inbox.png"
import style from "./Sidebar.module.css"

function SideBar(){

  const [username,seUsertName] = useState<string>("Thibault")
  const [email, setEmail] = useState<string>("tbone_92@outlook.fr")
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
          <div className={style.dashboardContainer}>
            <div className={style.dashboardLeft}>
              <img className={style.dashboardIcon} src={dashboardIcon}/>
              <p>Dashboard</p>
            </div>
            <div className={style.dashboardNotif}></div>
          </div>
          <div className={style.inboxContainer}>
            <div className={style.inboxLeft}>
              <img className={style.inboxIcon} src={inboxIcon}/>
              <p>Inbox</p>
            </div>
            <div className={style.inboxNotif}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar