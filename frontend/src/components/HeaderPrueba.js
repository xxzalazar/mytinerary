import React from 'react'
import Myti from '../img/myti.png'
import Usuario from '../img/usuarioLogo.png'
import FlechaD from '../img/flechaCity.png'
import {Link} from 'react-router-dom'
import {Dropdown, Divider, Button } from 'react-materialize'

const HeaderPrueba= () =>{
    return(<>
    <div className="header1" style={{display:'flex', flexDirection:'column',width:'inherit', height:'50vh'}}>
        <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
            <div style={{marginTop:'2vw'}}><a style={{marginRight:'5vh'}} href='#'>link1</a>
            <a href='#'>Link2</a></div>
            <Dropdown id="Dropdown_6"
            style={{color:'red'}}
            options={{
                alignment: 'rigth',
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
                outDuration: 250
            }}
            trigger={<a node="button"><img src={Usuario} style={{width:'4vw',height:'4vw', marginTop:'2%'}} ></img></a>}
            >
                <a href="#">Log In</a>
                <Divider />
                <a href="#">Sign Up </a>
            </Dropdown>
        </div>
        
        <div className="header0" style={{alignSelf:'center', height:'30vw', width:'65vw'}}> <img src={Myti} style={{width:'100%',height:'90%'}}></img> </div>
    </div>
    
    <div style={{width:'50%', textAlign:'center', marginBottom:'3vh', marginTop:'5vw',marginLeft:'26%' }} >
                 <p className="textoPrincipal">Find your perfect trip, designed by insiders who know and love their cities.</p>
             <Link to="/cities"> <img style={{width:'10vh'}} src={FlechaD}></img> </Link>
              </div>

    </>);
}
export default HeaderPrueba