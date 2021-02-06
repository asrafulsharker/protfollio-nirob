import React from 'react'
import Hero from '../hero/hero';
import About from '../about/about';
import Service from '../Services/service';
import Skill from '../skill/skill';
import Project from '../project/project';
import Feedback from '../feedback/feedback';
import Contact from '../contact/contact';
function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Service/>
            <Skill />
            <Project/>
            <Feedback/>
            <Contact/>
        </>
    )
}

export default Home;
