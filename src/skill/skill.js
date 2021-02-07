import React from 'react';
import Progress from './progress';
import './skill.css';
function Skill() {
    return (
        <div style={{background:"#d9faff"}}>
            <div className="container" style={{padding:"120px",background:""}}>
                <div style={{background:"white",boxShadow:"-4px 8px 20px -4px rgba(0,0,0,0.66)"}}>

               
                <p className="m-auto" style={{height:"48px",color:"",width:"240px",borderBottom:"10px solid #2bfcda",fontSize:"36px",fontWeight:"bold",textAlign:"center"}}>Software Skill</p>
                    <div className="row m-auto" style={{padding:"55px"}}>
                        <div className="col-md-6 ">
                        <p style={{color:""}}>Photoshop</p>
                        <Progress done="90"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:""}}>Illustrator</p>
                        <Progress done="70"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:""}}>Html</p> 
                        <Progress done="95"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:""}}>CSS</p>
                        <Progress done="90"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:""}}>JavaScript</p>
                        <Progress done="60"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:""}}>Python</p>
                        <Progress done="50"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:""}}>Django</p>
                        <Progress done="40"/>
                        </div>
                        <div className="col-md-6">
                            <p style={{color:""}}> React</p>
                        <Progress done="60"/>
                        </div>
                    </div> 
            </div>
            </div>
        </div>
    )
}
export default Skill;
