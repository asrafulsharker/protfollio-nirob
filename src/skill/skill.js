import React from 'react';
import Progress from './progress';
import './skill.css';
function Skill() {
    return (
        <div>
            <div className="container" style={{padding:"120px"}}>
                <p style={{textAlign:"center"}}>Software Skill</p>
                <Progress done="70"/>
                <Progress done="50"/>
                <Progress done="70"/>
                <Progress done="70"/>
                <Progress done="70"/>
                <Progress done="70"/>
                <Progress done="70"/>
            </div>
        </div>
    )
}

export default Skill;
