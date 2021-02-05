import React from 'react'
import './about.css';
function about() {
    return (
        <div>
            <div className="container" style={{padding:"140px 0px"}}>
                <div className="row">
                <div className="col-md-8">
                <p style={{width:"110px",borderBottom:"5px solid #c2fff5",fontSize:"25px"}}>About me</p>
                    <p style={{height:"48px",width:"410px",borderBottom:"10px solid #c2fff5",fontSize:"36px",fontWeight:"bold"}}>Creative Web Developer</p>
                    <p style={{height:"48px",width:"640px",borderBottom:"10px solid #c2fff5",fontSize:"36px",fontWeight:"bold"}}>Create Awesome Project As You Need</p>
                    <p style={{paddingTop:"15px"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
                </div>
                <div className="cil-md-4 ">
                    <div className="row">
                    <div style={{height:"200px",width:"200px",background:"#7811bd",borderRadius:"50%"}} className="redio1">
                        <p style={{fontSize:"20px", color:"white",fontWeight:"bold"}} className="redio-p"><span style={{fontSize:"40px", color:"white",fontWeight:"bold"}}>125+</span> <br/>
                        Active Client</p>
                    </div>
                    <div style={{height:"200px",width:"200px",background:"#e3d044",borderRadius:"50%"}} className="redio1">
                        <p style={{fontSize:"20px", color:"white",fontWeight:"bold"}} className="redio-p2"><span style={{fontSize:"40px", color:"white",fontWeight:"bold"}}>605+</span> <br/>
                        Client Feedback</p>
                    </div>
                    </div>
                    <div style={{height:"200px",width:"200px",background:"#db0457",marginLeft:"85px",marginTop:"-56px",borderRadius:"50%"}} className="redio1">
                        <p style={{fontSize:"20px", color:"white",fontWeight:"bold"}} className="redio-p3"><span style={{fontSize:"40px", color:"white",fontWeight:"bold"}}>800+</span> <br/>
                        Project Complete</p>
                    </div>
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default about
