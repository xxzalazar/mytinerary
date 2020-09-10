import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-materialize';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import axios from 'axios';

const Activities= (props)=>{
    const [itInfo, setItInfo]= useState([])
    const content = async () => {
      const itineraryData  = await axios.get(
        `http://127.0.0.1:4000/api/Activities/${props.data}`
      )
      console.log(itineraryData)
      const informacion = itineraryData.data.it
      setItInfo(informacion)
    }

useEffect(()=>{
  M.AutoInit()
    content()
  }, []) 
  
  
return (<>
    <Carousel
  carouselId="Carousel-2"
  className="white-text center"
  options={{
    fullWidth: true,
    indicators: true
  }}
>
   <div className="red">
  <h2>
    {itInfo.activityTitle}
  </h2>
  <p>
    dd
  </p>
</div>kjhjhj
  
</Carousel>
 </>)
}

export default Activities