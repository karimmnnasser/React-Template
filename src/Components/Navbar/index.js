import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {NavBar,Logo,LogoText, UlList, ListItem,Anchor} from './style.js';

class Navbar extends Component{
    render() {
            const Fix = {
                display: 'block',
                color: '#222',
                textDecoration: 'none',
                padding: '10px 15px',
                fontWeight: 'bold'
                };
                
            return (

            <NavBar>
                <div className="container">
                    
                    <Logo>
                        <LogoText> logo</LogoText>
                    </Logo>
                    
                    <UlList>
                        <ListItem ><Link style = {Fix} to = "/">Home</Link></ListItem>
                        <ListItem ><Link style = {Fix} to ="/Work">Work</Link></ListItem>
                        <ListItem ><Link style = {Fix} to ="/Portfolio">Portfolio</Link></ListItem>
                        <ListItem ><Link style = {Fix} to ="/Profile">Resume</Link></ListItem>
                        <ListItem ><Link style = {Fix} to ="/About">About</Link></ListItem>
                        <ListItem ><Link style = {Fix} to = "/Contact">Contact</Link></ListItem>
                    </UlList>
                </div>
            </NavBar>
        )
    }
}



export default Navbar