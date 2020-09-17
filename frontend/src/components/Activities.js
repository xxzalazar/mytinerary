import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Activities= (props)=>{
    const [itInfo, setItInfo]= useState([])
    const content = async () => {
      const itineraryData  = await axios.get(
        `http://127.0.0.1:4000/api/Activities/${props.data}`
      )
      setItInfo(itineraryData.data.activity)
    }   
useEffect(()=>{
    content()
  }, []) 
  
return (<>
    {itInfo.map(activity =>{
       return (<div style={{backgroundImage: `url(${activity.activityPic})`, marginLeft:'3%',backgroundRepeat:'no-repeat', backgroundSize:'cover', height:"15em", width:"15em", display: "inline-block"}}>
      <div style={{backgroundColor:"white"}} ><p>{activity.activityTitle}</p></div>
      </div>)
    })}
    </>)
}

export default Activities