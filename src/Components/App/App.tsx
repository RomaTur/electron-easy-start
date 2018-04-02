import * as React from 'react';
import './App.css';
import ParticlesBg from './ParticlesBg/ParticlesBg';

const fireImage = require('./assets/fire.png');
const reactImage = require('./assets/react.png');
const electronImage = require('./assets/electron.png');

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ParticlesBg />
        <div className='App__content'>
          <div className='App__images'>
            <img src={electronImage} alt='electron' className='App__images-img'/>
            <span className='App__images-plus'>+</span>
            <img src={reactImage} alt='react' className='App__images-img'/>
            <span className='App__images-plus'>+</span>
            <img src={fireImage} alt='fire' className='App__images-img'/>
          </div>
          <h1 className='App__hello'>Hello, username!</h1>
          <p className='App__paragraph'>
            If you are trying to build Electron apps using React, or you just want to play around with them, 
            feel free to use this seed as a starting point.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
