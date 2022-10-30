import React from 'react';
import {DropdownButton} from './Button.js';

class TimelineItem extends React.Component{
    render(){
        return <div className={"inner-container " + this.props.side}>
                    <div className="content">
                        <h3 className="text-center">{this.props.date}</h3>
                        <p className="text-center">{this.props.description}</p>
                        <hr className="mx-auto w-75"/>
                        <div key='dropdownBtnContainer' className='d-flex justify-content-center'>
                            <DropdownButton active={this.props.active} text="Details" handleClick={this.props.handleClick}/>
                        </div>
                        <div key='hiddenContent' className={"hidden-content" +(this.props.active ? ' active':'')}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
    }
}

class Timeline extends React.Component{
    render(){
        return <div className="timeline-container">
                    <div className="timeline">
                        {this.props.children}
                    </div>
                </div>
    }
}

export {TimelineItem, Timeline}