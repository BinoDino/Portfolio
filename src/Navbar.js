import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Home} from './img/home.svg';
import {ReactComponent as Motivation} from './img/motivation.svg';
import {ReactComponent as CV} from './img/cv.svg';
import {ReactComponent as Code} from './img/code.svg';
import {ReactComponent as Contact} from './img/contact.svg';
import {ReactComponent as Credits} from './img/link.svg';

// vertical navbar. inspired by https://www.youtube.com/watch?v=1uEAt51fEos 

class NavbarElement extends React.Component{
    render(){
        return <div key={'navItem#'+this.props.keyVal} className='navItem d-flex align-items-center flex-nowrap'>
                    <div key={'navImg#'+this.props.keyVal} className="p-2">
                        <NavLink to={this.props.href} end className={({ isActive }) => ["nav-link", isActive ? "active" : null,].filter(Boolean).join(" ")}>
                            {this.props.children}
                        </NavLink>
                    </div>
                    <div key={'navText#'+this.props.keyVal} className="nav-text p-2">
                        <NavLink to={this.props.href} end className={({ isActive }) => ["nav-link", isActive ? "active" : null,].filter(Boolean).join(" ")}>
                            <span>{this.props.text}</span>
                        </NavLink>
                    </div>
                </div>
    }
}

class Navbar extends React.Component{
 state={
    active: false,
    icons:[<Home/>,<Motivation/>,<CV/>,<Code/>,<Contact/>,<Credits/>],
    text:['Home','Motivation', 'Lebenslauf', 'Projekte', 'Kontakt', 'Credits'],
    href:['','motivation','cv','projects','contact','credits'] 
 }
 handleClick = () => {
    this.setState({
        active: !this.state.active
  })
 }
 render(){
    var navElements =[];
    for(let i=0; i<this.state.icons.length; i++){
        navElements.push(<NavbarElement keyVal={i.toString()} href={this.state.href[i]} text={this.state.text[i]}>{this.state.icons[i]}</NavbarElement>);
    }
    return <div className={'nav-container' + (this.state.active ? ' active': '') } >
                <button className={'toggleBox' + (this.state.active ? ' active': '') } onClick = {this.handleClick}>
                    <span className='icon'></span>
                </button>
                <div className={'menu' + (this.state.active ? ' active': '')}>
                    {navElements}
                </div>
            </div>
 }   
}

export default Navbar;