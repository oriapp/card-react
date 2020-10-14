import React from 'react';
import './App.css';
import Cards from './components/cards';
import ResponsiveNav from './components/navbar';
import LoggedUser from './components/loggeduser';

function App() {
  return (
    <React.Fragment>
      <ResponsiveNav />
      <LoggedUser />
      <p className={"text-danger"}>Hello from boot</p>
      <Cards />
    </React.Fragment>
  );
}

export default App;
