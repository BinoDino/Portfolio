import React from 'react';
import { NavLink } from 'react-router-dom';
import arrow from './img/up-arrow.png';
import './Button.css';

class DropdownButton extends React.Component{
    render(){
        return <button className='bg-transparent border-0' onClick={this.props.handleClick}>
                    {this.props.text}
                    <img className={'dropdown-img' + (this.props.active ? ' active' : '')} src={arrow} alt='Arrow displaying dropdown'/>
               </button>
    }
}

class NavButton extends React.Component{
    render(){
        return <NavLink className="btn btn-red" to={this.props.href}>{this.props.children}</NavLink>
    }
}

export { NavButton, DropdownButton }