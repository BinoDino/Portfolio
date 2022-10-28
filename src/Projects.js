import React from "react";
import AsymmetricBox from './AsymmetricBox.js';
import { NavButton, DropdownButton } from './Button.js';
import './Education+Projects.css';
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
        return <div className={"inner-container " + this.props.side}>
                    <div className="content">
                        <h3 className="text-center">{this.props.date}</h3>
                        <p key='title' className="text-center"><strong>{this.props.title}</strong></p>
                        <p key='description' className="text-center">{this.props.description}</p>
                        <hr className="mx-auto w-75"/>
                        <div key='dropdownBtnContainer' className='d-flex justify-content-center'>
                            <DropdownButton active={this.state.active} text="Details" handleClick={this.handleClick}/>
                        </div>
                        <div key='hiddenContent' className={"hidden-content" +(this.state.active ? ' active':'')}>
                            <hr className="mx-auto w-75"/>
                            <h5 className='text-center'>Aufgaben</h5>
                            <ul>
                                {this.props.tasks.map((value,index)=> 
                                    <li key={index}> {value} </li>
                                )}
                            </ul>
                            <h5 className='text-center'>Technologien</h5>
                            <div className='d-flex justify-content-center'>
                                {this.props.technologies.map((value,index)=> 
                                    <div key={index} className='p-2'>
                                        <img src={value} className='technologyIcon' alt='Technology Icon'/>
                                    </div> 
                                )}
                            </div>  
                        </div>
                    </div>
                </div>
    }
}


class Projects extends React.Component{
    state={
        date:['Seit 08/2022','Seit 08/2022', 'Seit 04/2022', '09/2021 - 03/2022', '02/2021 - 09/2021'],
        title:['KTK Website','Solo Game','Data4Indiko','Cyberwareness','Geheimnis einer Textnachricht'],
        description:['KTK Experts: Unternehmenswebseite','Aroolla: Konstruktion eines wiederverwendbaren Templates aus einem Serious Game','Pädagogische Hochschule Karlsruhe: Webseite zur Datenerfassung für Mustererkennung','Kooperation Pädagogische Hochschule Karlsruhe und Northeastern Illinois University: Projekt zur Aufklärung über Social Engineering','Pädagogische Hochschule Karlsruhe: Lernspiel zur Vermittlung der Funktionsweise des Internets'],
        tasks:[['Design und Implementierung Frontend'],['Analyse von Spiel-Prozessen','Modellierung der Beziehungen (ER + UML)','Implementierung eines Template-Prototypen'],['Datenbankmodellierung (ER) und - implementierung','Datenbankabfragen','Entwicklung und Implementierung Frontend-Struktur','Benutzerauthentifizierung mit JSON Web Token','Externer Datenzugriff via API','Erstellen von Cron Jobs zur zeitabhängigen Ausführung von PHP-Skripten'],['Design und Implementierung von Informationsabschnitt und Test zu Social Engineering','Responsive Design','Datenbankmodellierung und -implementierung','Analytics Sheet zur Datenauswertung','Multi Language Support (Deutsch/Englisch)'],['Implementierung Frontend','Spiel-Logik (Freischalten von Leveln)','Redundanzminimierung und Strukturierung in wiederverwendbare Komponenten','Responsive Design']],
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
                        <div className= 'row'>
                            <div className="col">
                                <h3 className="text-center">Projekte</h3>
                                <div className="timeline-container">
                                    <div className="timeline">
                                        {timelineElements}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className= 'row mt-3'>
                            <div className="d-flex justify-content-end">
                                <NavButton href={'/contact'}>Zum Kontakt</NavButton>
                            </div>
                        </div>
                    </AsymmetricBox>
                </div>
    }
}

export default Projects