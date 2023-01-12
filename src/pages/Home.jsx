import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import Logout from '../components/Logout';
import styles from "../styles/Home.module.css"

const Home = () => {
const [data,setData] = useState("");
const [mapData,setMapData] = useState("");


    const Nav = useNavigate();
useEffect(() => {
    const val = JSON.parse(localStorage.getItem("ideotic-login"));
    console.log(val)
    if(!val){
        console.log("hi")
        Nav("/")
    }
    getData()
})

function getData(){
    fetch("https://dog.ceo/api/breeds/list/all").then((res) => res.json()).then((res) => setData(res.message)).then((res) => setMapData(Object.keys(data)))
}
console.log(mapData);


function handleNavigate(){
    Nav("/details")
}
  return (
    <div className={styles.contain}>
       <div style={{display: "flex", justifyContent : "space-around", alignItems : "center"}}>
       <h2 className={styles.heading}>All Dog Breed</h2>
       <Logout />
       </div>
        <div className={styles.mini}>
        {
            mapData ? mapData.map((e) => (
             <div className={styles.card} onClick={handleNavigate}>
             <p>{e}</p>
             </div>
               
            )) : "Loading"
        }
        </div>
       
    </div>
  )
}

export default Home