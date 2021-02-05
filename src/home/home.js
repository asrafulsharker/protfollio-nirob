import React from 'react'
import Hero from '../hero/hero';
import About from '../about/about';
import Service from '../Services/service';
import Skill from '../skill/skill';
function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Service/>
            <Skill />
        </>
    )
}

export default Home;
