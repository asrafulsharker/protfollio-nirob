import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Nav from './nav/Nav';
import Home from './home/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Nav/>
       <Route path="/" exact component={Home}/>
    </>
  );
}

export default App;
