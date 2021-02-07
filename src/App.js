import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Nav from './nav/Nav';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact';
import Blog from './home/home';
import Services from './Services/service';
import Protfolio from './project/project';
import Project from './project/project';
import Footer from './footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Nav/>
       <Route path="/" exact component={Home}/>
       <Route path="/about" exact component={About}/>
       <Route path="/contact" exact component={Contact}/>
       <Route path="/services" exact component={Services}/>
       <Route path="/project" exact component={Project}/>
       <Route path="/protfolio" exact component={Protfolio}/>
       <Route path="/blog" exact component={Blog}/>
       <Footer/>
    </>
    
  );
}

export default App;
