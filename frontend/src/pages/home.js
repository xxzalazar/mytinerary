import React from 'react';
import HeaderPrueba from '../components/HeaderPrueba';
import Carrusel from '../components/Carousel';
import Footer1 from '../components/Footer';
class Home extends React.Component {

    render() {
        return (
            <>
            <HeaderPrueba/>
         
             <Carrusel/>
             <Footer1/>
            </>
        )

    }
}
export default Home