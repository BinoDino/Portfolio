import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Home} from './img/home.svg';
import {ReactComponent as Motivation} from './img/motivation.svg';
import {ReactComponent as Education} from './img/education.svg';
import {ReactComponent as Code} from './img/code.svg';
import {ReactComponent as Contact} from './img/contact.svg';
import {ReactComponent as Credits} from './img/link.svg';

class NavbarElement extends React.Component{
    render(){
        return <div className='navItem d-flex align-items-center flex-nowrap'>
                    <div key='navImg' className="p-2">
                        <NavLink to={this.props.href} end className={({ isActive }) => ["nav-link", isActive ? "active" : null,].filter(Boolean).join(" ")}>
                            {this.props.children}
                        </NavLink>
                    </div>
                    <div key='navText' className="nav-text p-2">
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
    icons:[<Home/>,<Motivation/>,<Education/>,<Code/>,<Contact/>,<Credits/>],
    text:['Home','Motivation', 'Education', 'Projekte', 'Kontakt', 'Credits'],
    href:['','motivation','education','projects','contact','credits'] 
 }
 handleClick = () => {
    this.setState({
        active: !this.state.active
  })
 }
 render(){
    var navElements =[];
    for(let i=0; i<this.state.icons.length; i++){
        navElements.push(<NavbarElement key={'navItem'+i.toString()} href={this.state.href[i]} text={this.state.text[i]}>{this.state.icons[i]}</NavbarElement>);
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