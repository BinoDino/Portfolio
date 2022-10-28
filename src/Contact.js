import React from "react";
import AsymmetricBox from './AsymmetricBox.js';
import {NavButton} from './Button.js';

class Contact extends React.Component{
    render(){
        return <div className= 'row'>
                <AsymmetricBox>
                    <div className= 'row'>
                        <div className="col">
                            <h3 className="text-center">Kontaktinformationen</h3>
                            <p key='email' className="text-center"> Bei Fragen oder Anregungen kannst du mir gerne eine Nachricht via E-Mail zukommen lassen: <a href='mailto:sabine-britner@t-online.de'>sabine-britner@t-online.de</a>.</p>
                            <p key='github' className="text-center"> Schau doch auch auf meinem <a target='_blank' href='https://github.com/BinoDino' rel="noreferrer">GitHub Profil</a> vorbei. Dort lade ich immer wieder kleinere private Projekte hoch. Beispielsweise habe ich erst kürzlich ein Template für das Kult-Spiel Minesweeper entwickelt und dort zur Verfügung gestellt.</p>
                        </div>
                    </div>
                    <div className= 'row mt-5'>
                        <div className="d-flex justify-content-end">
                            <NavButton href={'/credits'}>Zu den Credits</NavButton>
                        </div>
                    </div>
                </AsymmetricBox>
                </div>
    }
}

export default Contact