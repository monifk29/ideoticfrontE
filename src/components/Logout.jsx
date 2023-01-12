import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../styles/Logout.module.css"

const Logout = () => {

    const nav = useNavigate()

    function logoutfun(){
        localStorage.removeItem("ideotic-login");
nav("/")
    }

  return (
    <div><button onClick={logoutfun} className={styles.btn}>Logout</button></div>
  )
}

export default Logout