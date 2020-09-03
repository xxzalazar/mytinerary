import React, { useState, useEffect } from 'react';
import "../css/forms.css"
import {NavLink} from 'react-router-dom'
const SignIn = ()=>{
    const [signIn, setSignIn] = useState({})

    const data= e=>{
        const name= e.target.name
        const valor= e.target.value
        setSignIn({...signIn,[name]: valor})
    }
    const sendData = e=>{
        e.preventDefault()
        const logIn ={user: signIn.Username, password:signIn.password }
        console.log(logIn)

    }
    return(<>
    <div className="formsBox">
        <div className="formsTitle"><h3>Welcome to Mytinerary</h3> <p>Not a member? <button> <NavLink to="/Sign-Up">Sign Up!</NavLink></button></p></div>
        <div className="form">
        <input type="text" name="Username" onChange={data} placeholder="Username"/>
        <input type="password" name="password" onChange={data} placeholder="Password"/>
        <button onClick={sendData} > Sign In </button>   
        </div>

    </div>
    </>)
    

}

export default SignIn;