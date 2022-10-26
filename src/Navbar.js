import React from 'react';

class Navbar extends React.Component{
 render(){
    return <ul className='nav flex-column'>
                <li class="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
           </ul>
 }   
}

export default Navbar;