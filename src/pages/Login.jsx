import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css"


const Login = () => {

    const Nav = useNavigate()

const [email,setEmail] = useState("");
const [pass,setPass] = useState("");

useEffect(() => {
    const val = JSON.parse(localStorage.getItem("ideotic-login"));
console.log(val)
if(val){
    Nav("/home")
}
},[])

function handleLogin(){

if(email && pass){
    const payload = {
        email : email,
        password : pass
    }
    localStorage.setItem("ideotic-login", JSON.stringify(payload));

    fetch("https://ideoticlogin.onrender.com/reg",{
        headers : {
            "Content-type" : "application/json"
        },
        method : "POST",
        body : JSON.stringify(payload)
    })
.then((res) => console.log(res))
.catch((err) => console.log(err))

Nav("/home")
}

else {
    alert("try again")
}  
}


  return (
  <div>
      <div className={styles.contain} >
        <h2>Please LogIn Here</h2>
        <input type="email"    placeholder='Enter Email'  onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Enter Password'  onChange={(e) => setPass(e.target.value)}/>
  <button onClick={handleLogin}>Submit</button>
    </div>
  </div>
  )
}

export default Login 