import React from 'react';
import Header from '../components/header';
import Carrusel from '../components/carousel';
import Footer1 from '../components/footer';

class Home extends React.Component {

    render() {
        return (
            <>
             <Header/>
             <Carrusel/>
             <Footer1/>
            </>
        )

    }
}
export default Home