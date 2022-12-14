import React from "react";
import AsymmetricBox from './AsymmetricBox.js';
import {NavButton, DropdownButton} from './Button.js';
import './Credits.css'

class CreditContainer extends React.Component{
    state={
        active: false
    }
    handleClick = () => {
        this.setState({
            active: !this.state.active
      })
     }
    render(){
        return <div className="row mx-0 mt-3">
                    <div className="col">
                        <div key='dropdown' className='d-flex justify-content-center'>
                            <DropdownButton active={this.state.active} text={this.props.title} handleClick={this.handleClick}/>
                        </div>
                        <div key='hidden-credits' className={'hidden-credits' + (this.state.active ? ' active' : '' )}>
                            <hr className="mx-auto w-75"/>
                            {this.props.credits.map((value,index)=> 
                                        <li className="text-center" key={index}> {value} </li>
                            )}
                            <hr className="mx-auto w-75"/>
                        </div>
                    </div>
                </div>
    }
}

class Credits extends React.Component{
    state={
        title:['Navbar','Technologien','Sonstiges'],
        credits:[[<a href="https://www.flaticon.com/free-icons/home-button" title="home button icons">Home button icons created by Freepik - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/leadership" title="leadership icons">Leadership icons created by Freepik - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/education" title="education icons">Education icons created by Freepik - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Icongeek26 - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/reference" title="reference icons">Reference icons created by Freepik - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/contact" title="contact icons">Contact icons created by Cuputo - Flaticon</a>],[<a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Freepik - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/php" title="php icons">Php icons created by Freepik - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/mysql" title="mysql icons">Mysql icons created by Freepik - Flaticon</a>,<a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Freepik - Flaticon</a>],[<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a>]]
    }
    render(){
        var creditElements = [];
        for(let i=0; i<this.state.title.length; i++){
            creditElements.push(<CreditContainer key={i.toString()} title={this.state.title[i]} credits={this.state.credits[i]}/>);
        }
        return <div className= 'row'>
                <AsymmetricBox>
                <div key='creditRow-BG' className= 'row mt-3'>
                    <h3 className="text-center">Hintergrund</h3>
                    <p key='navbar' className="text-center">Der Hintergrund stammt von <a target='_blank'  href='https://www.svgbackgrounds.com/' rel="noreferrer">SVG Backgrounds</a>.</p>
                </div>
                <div key='creditRow-Components' className= 'row mt-3'>
                    <h3 className="text-center">Components</h3>
                    <p key='navbar' className="text-center">Die Navigationsleiste ist angelehnt an <a target='_blank'  href='https://www.youtube.com/watch?v=1uEAt51fEos ' rel="noreferrer">dieses YouTube-Tutorial</a>.</p>
                    <p key='asymmetricBox' className="text-center">Die asymmetrische Box ist angelehnt an <a target='_blank'  href='https://medium.com/@RoseLGauthier/how-to-use-css3-pseudo-elements-to-create-asymmetrical-designs-f610f2a481ed' rel="noreferrer">diesen Beitrag von Medium.com</a>.</p>
                    <p key='timeline' className="text-center">Die Timeline ist angelehnt an <a target='_blank'  href='https://www.w3schools.com/howto/howto_css_timeline.asp' rel="noreferrer">dieses W3schools-Tutorial</a>.</p>
                </div>
                <div key='creditRow-Icon' className= 'row'>
                    <h3 className="text-center">Icons</h3>
                    <p className="text-center">Die Icons, die ich auf dieser Seite verwende, stammen von <a target='_blank'  href='https://www.flaticon.com/' rel="noreferrer">Flaticon.com</a>. Details:</p>
                    {creditElements}
                </div>
                <div key='buttonRow' className= 'row mt-5 mt-lg-3 mb-3 mb-lg-0'>
                    <div className="d-flex justify-content-end">
                        <NavButton href={'/'}>Zur??ck zum Anfang</NavButton>
                    </div>
                </div>
                </AsymmetricBox>
                </div>
    }
}

export default Credits