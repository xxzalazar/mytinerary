import React, { useState } from 'react';
import "../css/forms.css";
import {NavLink} from 'react-router-dom';
import userActions from '../redux/actions/userActions';
import { connect } from "react-redux";
import { GoogleLogin } from 'react-google-login';


const SignIn = (props)=>{
    const [signIn, setSignIn] = useState({})
    const responseGoogle = e =>{
        props.loginUser({
            user: e.profileObj.email,
            password: e.profileObj.googleId
        })
    }

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
            props.history.push('/')
        }

    }
    return(<>
    <div className="formsBox">
        <div className="formsTitle"><h3>Welcome to Mytinerary</h3> <p>Not a member? <button> <NavLink to="/Sign-Up">Sign Up!</NavLink></button></p></div>
        <div className="form">
        <input type="text" name="username" onChange={data} placeholder="Username"/>
        <input type="password" name="password" onChange={data} placeholder="Password"/>
        <button onClick={sendData} > Sign In </button> 
        <GoogleLogin
    clientId="941179007513-cl7ib868q7un2tkvf2c17cp5k1t8haoi.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} style={{borderRadius:"25px"}}
  />  
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