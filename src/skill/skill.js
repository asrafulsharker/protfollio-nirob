import React from 'react';
import Progress from './progress';
import './skill.css';
function Skill() {
    return (
        <div style={{background:"rgb(0, 219, 172)"}}>
            <div className="container" style={{padding:"120px"}}>
                <p className="m-auto" style={{height:"48px",color:"white",width:"240px",borderBottom:"10px solid #2bfcda",fontSize:"36px",fontWeight:"bold",textAlign:"center"}}>Software Skill</p>
                    <div className="row m-auto" style={{padding:"55px"}}>
                        <div className="col-md-6 ">
                        <p style={{color:"white"}}>Photoshop</p>
                        <Progress done="90"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:"white"}}>Illustrator</p>
                        <Progress done="70"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:"white"}}>Html</p> 
                        <Progress done="95"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:"white"}}>CSS</p>
                        <Progress done="90"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:"white"}}>JavaScript</p>
                        <Progress done="60"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:"white"}}>Python</p>
                        <Progress done="50"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:"white"}}>Django</p>
                        <Progress done="40"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:"white"}}> React</p>
                        <Progress done="60"/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Skill;
