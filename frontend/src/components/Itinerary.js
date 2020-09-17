import React, {useState} from "react";
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import '../css/itineraries.css';
import timeW from '../img/timeW.png';
import Activities from '../components/Activities';
import gestuserImg from '../img/gestuserImg.png';
import userActions from '../redux/actions/userActions';
import { connect } from "react-redux";
import Comments from "./Comments";

const Itinerary = (props) => {

  const money = (cant) => {
    var x = []
    for (let i = 0; i < cant; i++) {
      x.push(i)
    }
    return x
  }
  const [view, setView] = useState(false)
  const [comment, setComment]= useState({})

  const readComment = e =>{
  const text=e.target.value
  setComment({ ...comment,[e.target.name] : text, user: props.username, itineraryId: props.itinerary._id, pp: props.profilePic  })} 
  
  const sendComment = async e =>{
  e.preventDefault()
  const addingComment= await props.newComment(comment)}
  
  const commentAuth= (props)=>{
  if(props.token){
    return(
      <div className="writeComment" style={{width:"100%", display: "flex", alignItems:"center", justifyContent:'center'}}>
         <div className="picturebox" style={{backgroundImage: `url(${props.token ? props.profilePic : gestuserImg})`,width:"4.5em", height:"4.5em",backgroundSize:"cover", alignItems:"center", display:"flex", margin: "0 2%"}}  />
         <textarea  playholder="write your comment here..." onChange={readComment} name="comment" style={{width:"60%",border:'2px black solid', padding:"1.5%" ,borderRadius:"2em", backgroundColor:"white", resize:"none",outline:"none", overflow:"hidden", marginRight:"2%" }}/>
      <div style={{marginBotton:"4%", display: "table"}}><button style={{alignSelf:"center!important",padding:"3%"}} onClick={sendComment} >send</button></div>
 </div>
    )
  }
}
return (
    <>
     <div className="itineraryBox">
       <div className="itObjects">
         <div style={{backgroundImage: `url(${props.itinerary.profilePhoto})`, backgroundPosition: "center", backgroundSize: "cover",backgroundRepeat: "no-repeat", width: "5em", height: "5em", border: "0.3vw solid black", borderRadius: "100%", marginLeft: "9%",  marginTop: "3%", marginBottom: "5%", }}></div>
         <div className="itPrototype">
           <div className="itTitle"> <p>
          {props.itinerary.title}
        </p>
  </div>
        <div style={{display: "flex",flexDirection:"row", alignItems: "center", flexWrap:"wrap", width:"100%", marginLeft:"15%"}}>
        <img alt='timer' src={timeW} style={{width:'3vw', height:'3vw'}}/>
        <p> {props.itinerary.duration} hs. </p> <p style={{marginLeft:'4%'}}> {props.itinerary.likes} likes </p>
        <div style={{display: "flex", flexDirection: "row", paddingLeft:'3%'}}>
        price:{'  '} {money(props.itinerary.price).map((index) => (
          <p key={index}>  <i class="fas fa-dollar-sign"></i></p>
        ))}  
         </div>
         
      </div> 
      <div style={{marginLeft:"4%"}}>
         {props.itinerary.hashtag.map((ht)=>{
           return <p style={{padding: "5%", display: "initial"}}>{ht}</p>
         })}
         </div>
         </div>
       </div>
       <div>
            {view && (
              <div className="actrender" >
                <Activities data={props.itinerary._id}/>
              </div>
            )}
            {view && (<div>
              <div>{props.itinerary.comments.map((comentario)=>{
                return <Comments data={comentario}/>
              })}</div>
              {commentAuth(props)}
             </div> )}
            <button  className="botones" style={{ alignSelf: "center", fontStyle: "oblique", marginBottom:'4%' }}
              onClick={() => {
                setView(!view)
              }}
            >
              {view ? "View less" : "View more"}
            </button>
       </div>
     </div>
     
    </>
  )
}
const mapStateToProps= state=>{
        
  return{
        token: state.user.token,
        profilePic: state.user.profilePic,
        username: state.user.username,
      }
}
const mapDispatchToProps={
  newComment: userActions.newComment
}
export default connect(mapStateToProps,mapDispatchToProps)(Itinerary)
