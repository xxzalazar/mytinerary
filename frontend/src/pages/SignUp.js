import React, { useState} from 'react';
import "../css/forms.css"
import {NavLink} from 'react-router-dom'
const SignUp = ()=>{
    const [signUp, setSignUp]= useState({})
    const data= e=>{
        const name= e.target.name
        const valor= e.target.value
        setSignUp({...signUp,[name]: valor})
    }
    const sendData = e=>{
        e.preventDefault()
        const newUser ={user: signUp.Username,name: signUp.name, email: signUp.email, birthday: signUp.age,password:signUp.password }
        console.log(newUser)

    }
    return(<>
        <div className="formsBox">
            <div className="formsTitle"><h3>Welcome to Mytinerary</h3> <p>I'm a member! <button> <NavLink to="/Sign-In">Sign In</NavLink></button></p></div>
            <div className="form">
            <input type="text" name="name" onChange={data} placeholder="Name"/>
            <input type="text" name="username" onChange={data} placeholder="Username"/>
            <input type="text" name="email" onChange={data} placeholder="Email"/>
            <input type="date" name="age" onChange={data} placeholder="birthday"/>
            <input type="password" name="password" onChange={data} placeholder="Password"/>
            <button OnClick={sendData}> Sign In </button>
            </div>
    
        </div>
        </>)

}

export default SignUp;