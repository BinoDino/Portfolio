import React from "react";
import AsymmetricBox from './AsymmetricBox.js';
import { NavButton, DropdownButton } from './Button.js';
import './CV.css';

class TimelineElement extends React.Component{
    state={
        active: false
    }
    handleClick = () => {
        this.setState({
            active: !this.state.active
      })
     }
    render(){
        return <div key={'timelineItem#'+this.props.keyVal} className={"inner-container " + this.props.side}>
                    <div className="content">
                        <h3 className="text-center">{this.props.date}</h3>
                        <p className="text-center">{this.props.description}</p>
                        <hr className="mx-auto w-75"/>
                        <div className='d-flex justify-content-center'>
                            <DropdownButton active={this.state.active} text="Details" handleClick={this.handleClick}/>
                        </div>
                        <div className={"hidden-content" +(this.state.active ? ' active':'')}>
                            <hr className="mx-auto w-75"/>
                            <p className="text-center"> {this.props.school} </p>
                            <p className="text-center">{this.props.degree_description} <strong>{this.props.degree}</strong></p>
                            <p className="text-center">{this.props.grades}</p>
                        </div>
                    </div>
                </div>
    }
}


class CV extends React.Component{
    state={
        date:['Seit 10/2017', '10/2015 - 03/2017', '10/2012 - 09/2015', '09/2003 - 06/2012'],
        description:['Bachelor-Studium Lehramt Sekundarstufe I mit den Fächern Mathematik und Informatik','Bachelor-Studium Lebensmittelchemie','Ausbildung zur staatlich anerkannten medizinisch-technischen Laboratoriumsassistenz','Besuch der weiterführenden Schule'],
        school:['Pädagogische Hochschule Karlsruhe','Karlsruher Institut für Technologie','Staatlich anerkannte Schule für Medizinisch-technische Laborassistenten am städtischen Klinikum in Karlsruhe','Windeck-Gymnasium Bühl'],
        degree_description:['Angestrebter Abschluss:','','Abschluss:','Abschluss:'],
        degree:['Bachelor of Science','Abbruch','Staatsexamen','Allgemeine Hochschulreife'],
        grades:['Aktueller Notenschnitt: 1,19','Notenschnitt: 1,6','Note: 1,3','Note: 1,4']
    }
    render(){
        var timelineElements =[];
        for(let i=0; i<this.state.date.length; i++){
            var sideOfContent = i%2 === 0 ? 'left':'right';
            timelineElements.push(<TimelineElement keyVal={i.toString()} side={sideOfContent} date={this.state.date[i]} description={this.state.description[i]} school={this.state.school[i]} degree={this.state.degree[i]} degree_description={this.state.degree_description[i]} grades={this.state.grades[i]}/>);
        }
        return <div className= 'row'>
                    <AsymmetricBox>
                        <div className= 'row'>
                            <div className="col">
                                <h3 className="text-center">Lebenslauf</h3>
                                <div className="timeline-container">
                                    <div className="timeline">
                                        {timelineElements}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className= 'row mt-3'>
                            <div className="d-flex justify-content-end">
                                <NavButton href={'/projects'}>Zu den Projekten</NavButton>
                            </div>
                        </div>
                    </AsymmetricBox>
                </div>
    }
}

export default CV