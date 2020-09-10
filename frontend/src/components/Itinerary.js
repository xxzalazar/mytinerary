import React, {useState} from "react";
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import '../css/itineraries.css';
import timeW from '../img/timeW.png';
import Activities from '../components/Activities';


const Itinerary = (props) => {
  const money = (cant) => {
    var x = []
    for (let i = 0; i < cant; i++) {
      x.push(i)
    }
    return x
  }
  
  const [view, setView] = useState(false)
  return (
    <>
     <div className="itineraryBox">
       <div className="itObjects">
         <div style={{backgroundImage: `url(${props.itinerary.profilePhoto})`, backgroundPosition: "center", backgroundSize: "cover",backgroundRepeat: "no-repeat", width: "5em", height: "5em", border: "0.3vw solid black", borderRadius: "50%", marginLeft: "9%",  marginTop: "3%", marginBottom: "5%", }}></div>
         <div className="itPrototype">
           <div className="itTitle"> <p>
          {props.itinerary.title}
        </p>
        </div>
        <div style={{display: "flex",flexDirection:"row", alignItems: "center", flexWrap:"wrap", width:"100%", marginLeft:"28%"}}>
        <img alt='timer' src={timeW} style={{width:'3vw', height:'3vw'}}/>
        <p> {props.itinerary.duration} hs. </p>
        <div style={{display: "flex", flexDirection: "row", paddingLeft:'3%'}}>
        price:{'  '} {money(props.itinerary.price).map((index) => (
          <p key={index}>  <i class="fas fa-dollar-sign"></i></p>
        ))}  
         </div>
      </div>  
        

         </div>
       </div>
       <div >
       <button  className="botones" style={{ alignSelf: "center", fontStyle: "oblique", margin:'0' }}
              onClick={() => {
                setView(!view)
              }}
            >
              {view ? "View less" : "View more"}
            </button>
            {view && (
              <div>
                <Activities data={props.itinerary._id}/>
              </div>
            )}
       </div>
     </div>
     
    </>
  )
}
export default Itinerary


{/* <div className="itineraryBox">
<div 
<div style={{ width:'inherit'}}>
  <div  style={{ display: "flex",  flexDirection: "column", alignItems: "center"}}>
      <div style={{marginLeft:'-9vw', marginBottom:'2vw'}}>
       
      </div>
      <div style={{display: "flex", alignItems: "center", flexWrap:'wrap', width:'55%'}}>
        <img alt='timer' src={timeW} style={{width:'3vw', height:'3vw'}}/>
        <p> {props.itinerary.duration} hs </p>
        <div style={{display: "flex", flexDirection: "row", paddingLeft:'3%'}}>
        {money(props.itinerary.price).map(() => (
          <p>$</p>
        ))}
         </div>
      </div>    
      <p>
          {/*props.itinerary.hashtag.map((ht) => (
           <p> {ht}</p>
          ))
          {props.itinerary.hashtag}
        </p>
  </div>

</div>

</div>}*/}