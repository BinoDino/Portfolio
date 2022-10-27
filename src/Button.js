import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.css';

class NavButton extends React.Component{
    render(){
        return <NavLink className="btn btn-red" to={this.props.href}>{this.props.children}</NavLink>
    }
}

export default NavButton