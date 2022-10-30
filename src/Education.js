import React from "react";
import AsymmetricBox from './AsymmetricBox.js';
import { NavButton} from './Button.js';
import{TimelineItem, Timeline} from './Timeline.js';
import './Timeline.css';

class TimelineElementEducation extends React.Component{
    state={
        active: false
    }
    handleClick = () => {
        this.setState({
            active: !this.state.active
      })
     }
    render(){
        return <TimelineItem side={this.props.side} active={this.state.active} date={this.props.date} description={this.props.description} handleClick={this.handleClick}>
                    <div key='hiddenContent' className={"hidden-content" +(this.state.active ? ' active':'')}>
                        <hr className="mx-auto w-75"/>
                        <p key='hiddenContent-p1' className="text-center"> {this.props.school} </p>
                        <p key='hiddenContent-p2' className="text-center">{this.props.degree_description} <strong>{this.props.degree}</strong></p>
                        <p key='hiddenContent-p3'className="text-center">{this.props.grades}</p>
                    </div>
                </TimelineItem>
                    
    }
}


class Education extends React.Component{
    state={
        date:['Seit 10/2017', '10/2015 - 03/2017', '10/2012 - 09/2015', '09/2003 - 06/2012'],
        description:['Bachelor-Studium Lehramt Sekundarstufe I mit den Fächern Mathematik und Informatik','Bachelor-Studium Lebensmittelchemie','Ausbildung zur staatlich anerkannten medizinisch-technischen Laboratoriumsassistenz','Besuch der weiterführenden Schule'],
        school:['Pädagogische Hochschule Karlsruhe','Karlsruher Institut für Technologie','Schule für Medizinisch-technische Laborassistenten am städtischen Klinikum in Karlsruhe','Windeck-Gymnasium Bühl'],
        degree_description:['Angestrebter Abschluss:','','Abschluss:','Abschluss:'],
        degree:['Bachelor of Science','Abbruch','Staatsexamen','Allgemeine Hochschulreife'],
        grades:['Aktueller Notenschnitt: 1,19','Notenschnitt: 1,6','Note: 1,3','Note: 1,4']
    }
    render(){
        var timelineElements =[];
        for(let i=0; i<this.state.date.length; i++){
            var sideOfContent = i%2 === 0 ? 'left':'right';
            timelineElements.push(<TimelineElementEducation key={'timelineItem'+i.toString()} side={sideOfContent} date={this.state.date[i]} description={this.state.description[i]} school={this.state.school[i]} degree={this.state.degree[i]} degree_description={this.state.degree_description[i]} grades={this.state.grades[i]}/>);
        }
        return <div className= 'row'>
                    <AsymmetricBox>
                        <div className= 'row mt-3 mt-lg-0'>
                            <div className="col px-0">
                                <h3 className="text-center">Education</h3>
                                <Timeline>
                                        {timelineElements}
                                </Timeline>
                            </div>
                        </div>
                        <div className= 'row mt-3 mb-3 mb-lg-0'>
                            <div className="d-flex justify-content-end">
                                <NavButton href={'/projects'}>Zu den Projekten</NavButton>
                            </div>
                        </div>
                    </AsymmetricBox>
                </div>
    }
}

export default Education