import React from 'react'
import './footer.css';
import Send from '../images/send.png';
import Google from '../images/google.png';
import Facebook from '../images/facebook.png';
import Twter from '../images/twter.png';
function footer() {
    return (
        <div style={{padding:"80px 200px 0px 200px",borderBottom:"70px solid #151515",background:"#d9faff"}}>
            
                <div className="row">
                    <div className="col-md-3">
                        {/* <img className="logo" src={logo}/> */}
                        <p className="f-p1">We aim to provide best Academic and skill 
                        courses that helps learners, the teachers also 
                        can become an instructor in Pondith - Online 
                        Learners’ and can share their knowledges.</p>
                        <div className="row">
                            <img style={{height:"32px",width:"32px",marginLeft:"10px"}} src={Google}/>
                            <img style={{height:"32px",width:"32px",marginLeft:"10px"}} src={Facebook}/>
                            <img style={{height:"32px",width:"32px",marginLeft:"10px"}} src={Twter}/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <p className="f-p2">Quick Link</p>
                        <p>Courses
                        <br/>
                        <br/>
                        Articles
                        <br/>
                        <br/>
                        Blogs
                        <br/>
                        <br/>
                        Data
                        <br/>
                        <br/>
                        Sessions</p>
                        </div>
                        <div className="col-md-2">
                        <p className="f-p2">About Me</p>
                        <p>
                        Privacy & Policy
                        <br/>
                        <br/>
                        Terms & Conditions
                        <br/>
                        <br/>
                        For More Information
                        <br/>
                        <br/>
                        Support
                        </p>
                        </div>
                        <div className="col-md-2">
                        <p className="f-p2"> Community</p>
                        <p>
                        Refer a friend
                        <br/>
                        <br/>
                        Join Langauge Club
                        <br/>
                        <br/>
                        Join Tech Community
                        <br/>
                        <br/>
                        For Clients
                        <br/>
                        <br/>
                        Explore Marketplace
                        </p>
                        </div>
                    <div className="col-md-3 mr-auto" style={{textAlign:"right"}}>
                        <p className="f-p2">NewsLetter</p>
                            <form >
                            <input style={{width:"70%",height:"50px"}} type="email" placeholder="Email Address"/>
                            <button style={{background:"rgb(0, 219, 172)",height:"50px",width:"20%",color:"white",border:"none",marginTop:"20px"}} type="submit"><img src={Send}/></button>
                            </form>
                        </div>
                </div>
                <hr/>
                <p style={{textAlign:"center"}}>Copyright © All Right Reserved</p>
          
        </div>
    )
}

export default footer;