import {useState} from "react"
import profilePic from "../../../assets/profilpic.jfif"
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
      </div>
    </>
  )
}

export default SideBar