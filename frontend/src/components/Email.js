import React from 'react';

const Email = () => {
    return (
        <div style={{width:'100', display: 'flex',flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <div style={{margin:"5vw 0"}}>
          <p>Please enter your email to search for your account:</p>
          <input style={{marginTop:"1.2%",border:"1.5px solid black", paddingLeft:"1vw", backgroundColor:"white"}} name="newpw" id="newpw"></input>      
         </div> 
         <p style={{marginTop:"40vh"}}>© MYtinerary 2020 | All rights reserved</p>
        </div>
    );
};

export default Email;