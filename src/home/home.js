import React from 'react'
import Hero from '../hero/hero';
import About from '../about/about';
import Service from '../Services/service';
function home() {
    return (
        <div>
            <Hero/>
            <About/>
            <Service/>
        </div>
    )
}

export default home
