import style from "./Register.module.css"

function Register(){
  return(
    <>
      <div className={style.page}>
        <div className={style.container}>
          <div className={style.leftContainer}>
            <div className={style.leftTop}>
              <h4 className={style.leftTitle}>Boost your productivity<br/>with DashAI</h4>
            </div>
          </div>
          <form className={style.rightContainer}>
            <h4 className={style.rightTitle}>Get Started Now</h4>
          </form>
      </div>
      </div>
    </>
  )
}

export default Register