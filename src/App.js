import Navbar from './Navbar.js';
import AsymmetricBox from './AsymmetricBox.js';
import Img from './Img.js';
import portrait from './img/sb.jpg';
import arrow from './img/up-arrow.png';
import './App.css';

function App() {
  return (
    <div className = 'container-fluid'>
      <div className="container">
        <div className= 'row justify-content-center'>
          <Navbar></Navbar>
        </div>
      </div>
      <div className='container mt-x'>
        <div className= 'row'>
          <AsymmetricBox>
            <div className= 'row'>
              <h3 className="text-center">Schön, dass du meine Seite besuchst!</h3>
              <p className="text-center">Mein Name ist Sabine Britner und ich programmiere leidenschaftlich gerne. Diese Seite stellt mein Portfolio dar. Sie gibt dir die Möglichkeit mich besser kennenzulernen. Schau dich gerne um.</p>
            </div>
            <Img imgSrc={portrait} alt="portrait" text="Das bin ich" icon={arrow} altIcon='arrow'></Img>
          </AsymmetricBox>
        </div>
      </div>
    </div>
  );
}

export default App;
