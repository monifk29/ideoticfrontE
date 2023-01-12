import React, { useEffect, useState } from 'react'
import Logout from '../components/Logout'
import styles  from "../styles/Detail.module.css"

const Detail = () => {

    const [data,setData] = useState()

useEffect(() => {
    fetch("https://dog.ceo/api/breed/hound/images").then((res) => res.json()).then((res) => setData(res.message))
},[])

console.log(data)
  return (
    <div>
        <div style={{display: "flex", justifyContent : "space-around", alignItems : "center", width: "90%"}}>
        <h1>Your Dream Pets</h1>
        <Logout/> 
       </div>
        <div className={styles.mini}>
{
    data ? data.map((e) => (
        <div className={styles.card} >
       <img  src={e} alt="img" />
        </div>
    )) : "Load"
}
        </div>
    </div>
  )
}

export default Detail