import React from 'react';
import {Footer} from 'react-materialize'
import Tw from '../img/twitter.png'
import Fb from '../img/facebook.png'
import Istg from '../img/instagram.png'

class Footer1 extends React.Component {
    render() {
        return (
            <Footer
                className="example #bdbdbd grey lighten-1"
                copyrights=" © MYT 2020 | All rights reserved"
                moreLinks={<a className="grey-text text-lighten-4 right" href="#!"><img style={{width:'5vh'}} src={Tw}></img> <img style={{width:'5vh'}} src={Fb}></img> <img style={{width:'5vh'}} src={Istg} ></img> </a>}
            >
            
                <p className="grey-text text-lighten-4">
                    espacio para agregar un par de links</p>
            </Footer>
        );
    }
}

export default Footer1;