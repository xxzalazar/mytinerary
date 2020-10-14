import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import userActions from '../redux/actions/userActions';
import { connect } from "react-redux";

const SignIn = (props)=>{
    const [signIn, setSignIn] = useState({})
    const [load, setLoad]= useState(false)
    const [err, setErr]=useState()
    const data= e=>{
        const name= e.target.name
        const valor= e.target.value
        setSignIn({...signIn,[name]: valor})
    }
    const sendData = async e=>{
        e.preventDefault()
        if( signIn.username === '' || signIn.password === ''){
            return (<>{setLoad(true) &
            setErr(<span style={{color:"red"}}>All fields are required.</span>)}
            </>)
        }else{
            setLoad(false)
          const logIn ={...signIn}
          const loggedUser = await props.loginUser(logIn)
          if(loggedUser){
            setLoad(true)
            setErr(<span style={{color:"red"}}>{loggedUser}</span>)
          }else{
            props.history.push('/') 
          }
        }

    }
    return(<>
    <div style={{width:'100', display: 'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <div className="formsTitle"><h3>Welcome to Mytinerary</h3> <p>Not a member? <button> <NavLink to="/Sign-Up">Sign Up!</NavLink></button></p></div>
        {load && err}
        <div>
            <label name="username">Username:</label>
            <input type="text" name="username" onChange={data} placeholder="Username"  style={{border:"1.5px solid black", paddingLeft:"1vw",backgroundColor:"white" }}/>
            <label name="password">Password:</label>
            <input type="password" name="password" onChange={data} placeholder="Password"  style={{border:"1.5px solid black", paddingLeft:"1vw", backgroundColor:"white"}}/>
            <div style={{display:"flex",alignItems: "center", flexDirection:"column"}}><button onClick={sendData} > Sign In </button> <NavLink to="/new-pass"><a style={{alignSelf:"center", textAlign:"center"}}>Forgot password?</a></NavLink></div>
           
         </div>
         <p style={{marginTop:"20vh"}}>© MYtinerary 2020 | All rights reserved</p>
         
    </div>
    </>)
   
}

const mapStateToProps= state=>{
        
    return{
          token: state.user.token,
          profilePic: state.user.profilePic,
          username: state.user.username,
          success: state.user.success
        }
}
const mapDispatchToProps ={
	loginUser: userActions.loggedUser
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)