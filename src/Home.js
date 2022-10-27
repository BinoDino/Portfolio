import React from "react";
import AsymmetricBox from './AsymmetricBox.js';
import Img from './Img.js';
import {NavButton} from './Button.js';
import portrait from './img/sb.jpg';
import arrow from './img/up-arrow.png';

class Home extends React.Component{
    render(){
        return <div className= 'row'>
                <AsymmetricBox>
                    <div className= 'row'>
                        <div className="col">
                            <h3 className="text-center">Schön, dass du meine Seite besuchst!</h3>
                            <p className="text-center">Mein Name ist Sabine Britner und ich programmiere leidenschaftlich gerne. Diese Seite stellt mein Portfolio dar. Sie gibt dir die Möglichkeit mich besser kennenzulernen. Schau dich gerne um.</p>
                        </div>
                    </div>
                    <Img imgSrc={portrait} alt="portrait" text="Das bin ich" icon={arrow} altIcon='arrow'></Img>
                    <div className= 'row'>
                        <div className="d-flex justify-content-end">
                            <NavButton href={'motivation'}>Hier geht es zum Rundgang</NavButton>
                        </div>
                    </div>
                </AsymmetricBox>
                </div>
    }
}

export default Home