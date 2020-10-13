import React, { useEffect } from 'react';
import Usuario from '../img/usuarioLogo.png';
import { Dropdown, Divider } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import userActions from '../redux/actions/userActions';
import { connect } from "react-redux";
import '../css/nav.css'

const Navegador =(props)=> {
  
  const nav = props.token ? <NavLink to='/LogOut' onClick={()=>{props.logOut()}} > Sign Out</NavLink> :(<><NavLink to='/Sign-In'> Sign In</NavLink><Divider /><NavLink to='/Sign-Up'> Sign Up</NavLink></>)

    return(
      <>
        <div className="nave">
          <label for="toggle"> &#9776; </label>
          <input type="checkbox" id="toggle"></input>
          <div className="menu">
            <NavLink to="/" className="boton">
              Home
            </NavLink>

            <a className="boton" href="#">
              Cities
            </a>

            <a href="#" className="boton">
              faqs
            </a>
          </div>
        </div>
        <div className="usuario">
          <Dropdown
            id="Dropdown_6"
            options={{
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              container: null,
              coverTrigger: false,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250,
            }}
            trigger={
              <a node="button" >
                <div  style={{backgroundImage: `url(${props.token ? props.profilePic : Usuario})`,backgroundRepeat:'no-repeat', backgroundPosition:'cover',backgroundSize:'4em',width: '4em', height: '4em', borderRadius:'50%'}}></div>
                
              </a>
            }
          > 
          {nav}
          </Dropdown>
        </div>
      </>
    );
}
const mapStateToProps= state=>{
	return{
	  token: state.user.token,
    profilePic: state.user.profilePic,
    username: state.user.username,
	}
}
const mapDispatchToProps = {
  logOut: userActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Navegador)

