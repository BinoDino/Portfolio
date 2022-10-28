import React from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Arrow} from './img/up-arrow.svg';
import './Button.css';

class DropdownButton extends React.Component{
    render(){
        return <button className={'bg-transparent border-0 p-2 dropdown'+ (this.props.active ? ' active' : '')} onClick={this.props.handleClick}>
                    <span>{this.props.text}</span>
                    <span className={'dropdown-img'}><Arrow/></span>
               </button>
    }
}

class NavButton extends React.Component{
    render(){
        return <NavLink className="btn btn-red" to={this.props.href}>{this.props.children}</NavLink>
    }
}

export { NavButton, DropdownButton }