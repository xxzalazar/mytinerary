import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { connect } from "react-redux";

const Comments = (comentario, props) => {
    
const delComment = async e =>{
  e.preventDefault()
  const response = await axios.put("http://127.0.0.1:4000/api/comments", comentario.data)
  if(response.data.success){
     alert("deleted")
  }else{
      alert("error")
  }
}
    return (
        <div style={{margin:"2.5%", display:"flex"}}>
            <div style={{backgroundImage: `url(${comentario.data.pp})`,width:"4.5em", height:"4.5em",backgroundSize:"cover", alignItems:"center", display:"inline-block", margin: "0 2%"}}/>
            <div>
            <div style={{width:"23em"}}>
            <div>{comentario.data.user}{" "}said:</div>
    <div style={{backgroungColor:"white", border:"1px solid grey"}}><p style={{backgroundColor: "white"}}>{comentario.data.comment}</p></div>
            
    <button onClick={delComment}>x</button>
                </div> 
            </div>
        </div>
    );
};
const mapStateToProps= state=>{
        
    return{
          token: state.user.token,
          profilePic: state.user.profilePic,
          username: state.user.username,
        }
}

export default connect(mapStateToProps, null)(Comments)