import React from "react";
import AsymmetricBox from './AsymmetricBox.js';
import { NavButton} from './Button.js';
import{TimelineItem, Timeline} from './Timeline.js';
import './Timeline.css';
import  css3 from './img/css.png';
import html5 from './img/html-5.png';
import javascriptIcon from './img/js.png';
import reactIcon from './img/react.png';
import python from './img/python.png';
import php from './img/php.png';
import mysql from './img/mysql.png';

class TimelineElementProjects extends React.Component{
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
                    <hr className="mx-auto w-75"/>
                    <h5 className='text-center'>Aufgaben</h5>
                    <ul>
                        {this.props.tasks.map((value,index)=> 
                            <li key={index}> {value} </li>
                        )}
                    </ul>
                    <h5 className='text-center'>Technologien</h5>
                    <div className='d-flex flex-wrap justify-content-center'>
                        {this.props.technologies.map((value,index)=> 
                            <div key={index} className='p-2'>
                                <img src={value} className='technologyIcon' alt='Technology Icon'/>
                            </div> 
                        )}
                    </div>  
                </TimelineItem>
    }
}


class Projects extends React.Component{
    state={
        date:['Seit 08/2022','Seit 08/2022', 'Seit 04/2022', '09/2021 - 03/2022', '02/2021 - 09/2021'],
        title:['KTK Website','Solo Game','Data4Indiko','Cyberwareness','Geheimnis einer Textnachricht'],
        description:['KTK Experts: Unternehmenswebseite','Aroolla: Konstruktion eines wiederverwendbaren Templates aus einem Serious Game','Pädagogische Hochschule Karlsruhe: Webseite zur Datenerfassung für Mustererkennung','Kooperation Pädagogische Hochschule Karlsruhe und Northeastern Illinois University: Projekt zur Aufklärung über Social Engineering','Pädagogische Hochschule Karlsruhe: Lernspiel zur Vermittlung der Funktionsweise des Internets'],
        tasks:[['Design und Implementierung Frontend'],['Analyse von Spiel-Prozessen','Modellierung der Beziehungen','Implementierung eines Template-Prototypen'],['Modellierung und Implementierung der Datenbank','Datenbankabfragen','Entwicklung und Implementierung Frontend-Struktur','Authentifizierung von Benutzern mit JSON Web Token','Externer Datenzugriff via API','Erstellen von Cron Jobs zur zeitabhängigen Ausführung von PHP-Skripten'],['Design und Implementierung von Info-Seite und Test zu Social Engineering','Responsive Design','Modellierung und Implementierung der Datenbank','Analytics Sheet zur Datenauswertung','Multi Language Support (Deutsch/Englisch)'],['Implementierung Frontend','Spiel-Logik (Freischalten von Leveln)','Minimierung von Redundanzen und Strukturierung in wiederverwendbare Komponenten','Responsive Design']],
        technologies:[[html5,css3,reactIcon],[mysql,python],[html5,css3,javascriptIcon,php,mysql],[html5,css3,javascriptIcon,php,mysql,python],[html5,css3,javascriptIcon]]
    }
    render(){
        var timelineElements =[];
        for(let i=0; i<this.state.date.length; i++){
            var sideOfContent = i%2 === 0 ? 'left':'right';
            timelineElements.push(<TimelineElementProjects key={'timelineItem'+i.toString()} side={sideOfContent} date={this.state.date[i]} description={this.state.description[i]} title={this.state.title[i]} tasks={this.state.tasks[i]} technologies={this.state.technologies[i]}/>);
        }
        return <div className= 'row'>
                    <AsymmetricBox>
                        <div className= 'row mt-3 mt-lg-0'>
                            <div className="col px-0">
                                <h3 className="text-center">Projekte</h3>
                                <Timeline>
                                    {timelineElements}
                                </Timeline>
                            </div>
                        </div>
                        <div className= 'row mt-3 mb-3 mb-lg-0'>
                            <div className="d-flex justify-content-end">
                                <NavButton href={'/contact'}>Zum Kontakt</NavButton>
                            </div>
                        </div>
                    </AsymmetricBox>
                </div>
    }
}

export default Projects