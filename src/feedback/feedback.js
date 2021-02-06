import React from 'react'
import comma from '../images/comma.png';
import Background from '../images/background.jpg';
import './feedback.css';
function feedback() {
    return (
        <div style={{padding:"80px"}}>
            <div className="container" >
            <p className="m-auto" style={{height:"48px",color:"",marginTop:"px",width:"270px",borderBottom:"10px solid #2bfcda",fontSize:"36px",fontWeight:"bold",textAlign:"center"}}>Client Feedback</p>
                <div className="row" style={{paddingTop:"20px"}}>
                <div className="col-md-5 f-box" style={{padding:"50px",border:"1px solid gray ",margin:"46px"}}>
                    <img style={{marginBottom:"20px"}} src={comma}/>
                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
                    <div className="row" style={{marginTop:"30px"}}>
                       <div className="col-md-7" style={{marginLeft:"5px"}}>
                            <div className="row" >
                            <img style={{height:"60px", width:"60px",borderRadius:"50%"}} src={Background}/>
                            <p style={{marginLeft:"10px"}}><span style={{fontSize:"25px",fontWeight:"bold"}}>Md Nirob</span><br/>CEO,Kids & Gadget</p>
                            </div>
                       </div>
                       <div className="col-md-4">
                           <p  style={{textAlign:"right",fontFamily:"italic"}}>ASraful</p>
                       </div>
                    </div>
                </div>
                <div className="col-md-5 f-box" style={{padding:"50px",border:"1px solid gray ",margin:"46px"}}>
                    <img style={{marginBottom:"20px"}} src={comma}/>
                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
                    <div className="row" style={{marginTop:"30px"}}>
                       <div className="col-md-7" style={{marginLeft:"5px"}}>
                            <div className="row" >
                            <img style={{height:"60px", width:"60px",borderRadius:"50%"}} src={Background}/>
                            <p style={{marginLeft:"10px"}}><span style={{fontSize:"25px",fontWeight:"bold"}}>Md Nirob</span><br/>CEO,Kids & Gadget</p>
                            </div>
                       </div>
                       <div className="col-md-4">
                           <p  style={{textAlign:"right",fontFamily:"italic"}}>ASraful</p>
                       </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default feedback;

