import React from 'react'
import { Link } from 'react-router-dom';
import Nirob from '../images/nirob.jpeg';
import './hero.css';

function hero() {
    return (
        <div className="hero-main-div">
            <div style={{padding:"190px 0px",paddingTop:"250px"}} className="container">
                <div className="row">
                <div className="col-md-8">
                    <p style={{fontSize:"30px"}}>Hi Myself <span style={{color:"rgb(0, 219, 172)"}}>Md Asraful Sharker Nirob</span></p>
                    <p style={{fontSize:"45px"}}>Professional Web Developer</p>
                    <p style={{fontSize:"15px",paddingTop:"20px"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                    <div className="row" style={{paddingTop:"20px"}}>
                        <Link style={{padding:"10px 35px",marginLeft:"16px",fontSize:"20px", zIndex:"2",color:"white",textDecoration:"none", background:"rgb(0, 219, 172)",cursor:"pointer" }} to="#/">About Me</Link>
                        <Link  style={{padding:"10px 35px",marginLeft:"16px",fontSize:"20px", zIndex:"2",color:"white",textDecoration:"none", background:"black",cursor:"pointer" }} to="#./">Download</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <img style={{width:"100%",borderRadius:"50%"}} src={Nirob}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default hero
