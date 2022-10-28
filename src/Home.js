import React from "react";
import AsymmetricBox from './AsymmetricBox.js';
import Img from './Img.js';
import {NavButton} from './Button.js';
import portrait from './img/sb.jpg';
import arrow from './img/up-arrow.svg';

class Home extends React.Component{
    render(){
        return <div className= 'row'>
                <AsymmetricBox>
                    <div className= 'row mt-3 mt-lg-0'>
                        <div className="col">
                            <h3 className="text-center">Schön, dass du meine Seite besuchst!</h3>
                            <p className="text-center">Mein Name ist Sabine Britner und ich programmiere leidenschaftlich gerne. Diese Seite stellt mein Portfolio dar. Sie gibt dir die Möglichkeit mich besser kennenzulernen. Schau dich gerne um.</p>
                        </div>
                    </div>
                    <Img imgSrc={portrait} alt="portrait" text="Das bin ich" icon={arrow} altIcon='arrow'></Img>
                    <div className= 'row mt-4 mt-lg-3 mb-3 mb-lg-0'>
                        <div className="d-flex justify-content-end">
                            <NavButton href={'/motivation'}>Zum Rundgang</NavButton>
                        </div>
                    </div>
                </AsymmetricBox>
                </div>
    }
}

export default Home