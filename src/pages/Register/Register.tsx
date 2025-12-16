import style from "./Register.module.css"
import {useRef} from "react"

function Register(){

  let name = useRef("")

  return(
    <>
      <div className={style.page}>
        <div className={style.container}>
          <div className={style.leftContainer}>
            <div className={style.leftTop}>
              <h1 className={style.leftTitle}>Boost your productivity<br/>with DashAI</h1>
            </div>
          </div>
          <form className={style.rightContainer}>
            <h1 className={style.rightTitle}>Get Started Now</h1>
            <h3 className={style.rightSubtitle}>Please log in into your account to continue</h3>

            <div className={style.field}>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required/>
            </div>
            
            <div className={style.field}>
              <label>Email address</label>
              <input type="text" placeholder="Enter your email" required/>
            </div>
            
            <div className={style.field}>
              <label>Password</label>
              <input type="text" placeholder="Enter your password" required/>
            </div>
            
            <div className={style.checkbox}>
              <input type="checkbox" required/>
              <label>I agree with the terms and conditions</label>
            </div>

            <button className={style.btnLogin}>
              Login
            </button>

            <h3 className={style.signUp}>Have an account ? Sign up</h3>

            <label className={style.separation}>OR</label>

            <div className={style.otherLogin}>
              <button>Login with <span>Google</span></button>
              <button>Login with <span>Apple</span></button>
            </div>
          </form>
      </div>
      </div>
    </>
  )
}

export default Register