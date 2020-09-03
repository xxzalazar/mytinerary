import React, {useState} from "react";
import '../css/itineraries.css';
import timeW from '../img/timeW.png';

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
      <div style={{display: "flex", flexDirection: "row", width:'100%', border: '0.3vw solid black', margin:'2vw',marginLeft:'33.2%',  minHeight:'20vw'}}
      >
        <div style={{ backgroundImage: `url(${props.itinerary.profilePhoto})`, backgroundPosition: "center", backgroundSize: "cover",backgroundRepeat: "no-repeat", width: "13%", height: "7vw",  boxShadow: " 0vw 1.1vh 1.1vh rgb(0, 0, 0, 0.5)", border: "0.3vw solid black", borderRadius: "50%", marginLeft: "9%",  marginTop: "3%", marginBottom: "5%", }}></div>
        <div style={{ width:'inherit'}}>
          <div  style={{ display: "flex",  flexDirection: "column", alignItems: "center"}}>
              <div style={{marginLeft:'-9vw', marginBottom:'2vw'}}>
                <p style={{fontFamily: "DatalegreyaDot", fontSize: "2.5vw", textAlign:'center'}}>
                  {props.itinerary.title}
                </p>
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
                  ))*/}
                  {props.itinerary.hashtag}
                </p>
          </div>
          <div>
          <button  className="botones" style={{ height: "3vw", alignSelf: "center", borderRadius: "25px", padding: "0.5vw",  fontStyle: "oblique", marginTop:'3vw' }}
              onClick={() => {
                setView(!view)
              }}
            >
              {view ? "View less" : "View more"}
            </button>
            {view && (
              <div>
                <p>contenido oculto</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default Itinerary
