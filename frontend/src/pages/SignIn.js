import React, { useState } from 'react';
import "../css/forms.css";
import {NavLink} from 'react-router-dom';
import userActions from '../redux/actions/userActions';
import { connect } from "react-redux";

const SignIn = (props)=>{
    const [signIn, setSignIn] = useState({})


    const data= e=>{
        const name= e.target.name
        const valor= e.target.value
        setSignIn({...signIn,[name]: valor})
    }
    const sendData = async e=>{
        e.preventDefault()
        if( signIn.username === '' || signIn.password === ''){
            alert("todos los campos son obligatorios")
        }else{
          const logIn ={...signIn}
          const loggedUser = await props.loginUser(logIn)
          
        }

    }
    return(<>
    <div className="formsBox">
        <div className="formsTitle"><h3>Welcome to Mytinerary</h3> <p>Not a member? <button> <NavLink to="/Sign-Up">Sign Up!</NavLink></button></p></div>
        <div className="form">
        <input type="text" name="username" onChange={data} placeholder="Username"/>
        <input type="password" name="password" onChange={data} placeholder="Password"/>
        <button onClick={sendData} > Sign In </button>   
        </div>
    </div>
    </>)
   
}

const mapStateToProps= state=>{
        
    return{
          token: state.user.token,
          profilePic: state.user.profilePic,
          username: state.user.username,
        }
}
const mapDispatchToProps ={
	loginUser: userActions.loggedUser
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)