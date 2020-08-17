import React from 'react';
import { Navbar, Icon, Dropdown, Divider } from 'react-materialize'
import Logo from '../img/logo.png'

class Header extends React.Component {
    render() {
        return (
            <>
                <div >
                    <Navbar
                        className="#b9f6ca green accent-1"
                        alignLinks="right"
                        brand={<a className="brand-logo" href="#"><img style={{width:'30vh'}} src={Logo}></img></a>}
                        id="mobile-nav"
                        menuIcon={<Icon>menu</Icon>}
                        options={{
                            draggable: true,
                            edge: 'left',
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 200,
                            preventScrolling: true
                        }}
                    
                    >
                        
                        <Dropdown
                            id="Dropdown_7"
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
                                outDuration: 250
                            }}
                            trigger={<a href="#!"><Icon style={{width:"20vh"}} center>account_circle</Icon></a>}
                        >
                            <a href="#">
                                Log in
                           </a>
                            
                            <Divider />
                            <a href="#">
                                Sign up
                           </a>
                        </Dropdown>
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
                                outDuration: 250
                            }}
                            trigger={<a href="#!"><Icon>menu</Icon></a>}
                        >
                            <a href="#">
                                one
                           </a>
                            <a href="#">
                                two
                             </a>
                            <Divider />
                            <a href="#">
                                three
                           </a>
                        </Dropdown>
                    </Navbar>
                </div>
            </>
        )
    }

}
export default Header