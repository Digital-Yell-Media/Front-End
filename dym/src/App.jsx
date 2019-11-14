import React from 'react';
import './App.css';
import LogoComponent from './components/logo';
import NavBar from './components/navBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <p>
          <LogoComponent/>
         Coming Soon!
        </p>
        
      </header>
    </div>
  );
}

export default App;
