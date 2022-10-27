import React from "react";
import { NavLink } from 'react-router-dom';
import AsymmetricBox from './AsymmetricBox.js';
import {NavButton} from './Button.js';

class Motivation extends React.Component{
    render(){
        return <div className= 'row'>
                <AsymmetricBox>
                    <div className= 'row'>
                        <div className="col">
                            <h3 className="text-center">Meine Motivation</h3>
                            <p className="text-center"> Im Jahr 2019 habe ich im Rahmen meines Studiums das Programmieren kennen und lieben gelernt. Die erste Programmiersprache, die ich erlernte, war <strong>Python</strong>. Schon damals hatte ich unglaublich große Freude daran, knifflige Programmieraufgaben zu lösen und immer neues dazu zu lernen.</p>
                            <p className="text-center"> Kein Jahr später habe ich begonnen mich mit der Webentwicklung auseinanderzusetzen. Mithilfe von Tutorials habe ich mir Fertigkeiten in <strong>HTML, CSS</strong> sowie <strong>JavaScript</strong> und <strong>React</strong> angeeignet. Über Hochschulveranstaltungen kamen außerdem <strong>PHP</strong> und <strong>MySQL</strong> dazu, sodass ich schon bald in der Lage war kleine Backends zu konstruieren.</p>
                            <p className="text-center"> Um meine Fertigkeiten auszubauen und Erfahrungen zu sammeln, begann ich an echten Projekten - hauptsächlich im Rahmen der Hochschule - mitzuarbeiten. Details dazu kannst du in der <NavLink to='/projects'>Auflistung der Projekte</NavLink>, an denen ich mitgewirkt habe oder derzeit mitwirke, nachlesen.</p>
                            <p className="text-center"> Meine Motivation für das Programmieren hält bis heute an. Es ist mein größter Wunsch diesen Weg für meine berufliche Laufbahn weiterzuverfolgen. Ich bin neugierig und offen neues dazu zu lernen und mich stetig zu verbessern.</p>
                        </div>
                    </div>
                    <div className= 'row'>
                        <div className="d-flex justify-content-end">
                            <NavButton href={'/cv'}>Zum Lebenslauf</NavButton>
                        </div>
                    </div>
                </AsymmetricBox>
                </div>
    }
}

export default Motivation