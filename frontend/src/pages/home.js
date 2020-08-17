import React from 'react';
import Header from '../components/header';
import Carrusel from '../components/carousel';
import Footer1 from '../components/footer';
import FlechaD from '../img/flechaD.png'
class Home extends React.Component {

    render() {
        return (
            <>
             <Header/>
             <div style={{width:'50%', textAlign:'center', marginBottom:'3vh',marginLeft:'26%' }} ><p className="textoPrincipal">Find your perfect trip, designed by insiders who know and love their cities.</p>
             <a href="#!"><img style={{width:'10vh'}} src={FlechaD}></img></a>
              </div>
             <Carrusel/>
             <Footer1/>
            </>
        )

    }
}
export default Home