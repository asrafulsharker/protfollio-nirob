import React from 'react';
import s1 from '../images/s-1.png';
import s2 from '../images/s-2.png';
import s3 from '../images/s-3.png';
import s4 from '../images/s-4.png';
import s5 from '../images/s-5.png';
import s6 from '../images/s-6.png';


import './service.css';
function service() {
    return (
        <div style={{background:"#f5f7f7",padding:"100px"}}>
            <div className="container">
                <div className="row">
                <div style={{margin:"39px",background:"white",padding:"30px"}} className="col-md-3 s-div">
                   <img src={s1}/>
                   <p style={{fontSize:"20px",fontWeight:"bold",marginTop:"15px"}}>Graphic Design</p>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div style={{margin:"39px",background:"white",padding:"30px"}} className="col-md-3 s-div">
                   <img src={s2}/>
                   <p style={{fontSize:"20px",fontWeight:"bold",marginTop:"15px"}}>Graphic Design</p>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div style={{margin:"39px",background:"white",padding:"30px"}} className="col-md-3 s-div">
                   <img src={s3}/>
                   <p style={{fontSize:"20px",fontWeight:"bold",marginTop:"15px"}}>Graphic Design</p>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div style={{margin:"39px",background:"white",padding:"30px"}} className="col-md-3 s-div">
                   <img src={s4}/>
                   <p style={{fontSize:"20px",fontWeight:"bold",marginTop:"15px"}}>Graphic Design</p>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div style={{margin:"39px",background:"white",padding:"30px"}} className="col-md-3 s-div">
                   <img src={s5}/>
                   <p style={{fontSize:"20px",fontWeight:"bold",marginTop:"15px"}}>Graphic Design</p>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                <div style={{margin:"39px",background:"white",padding:"30px",cursor:"pointer"}} className="col-md-3 s-div">
                   <img src={s6}/>
                   <p style={{fontSize:"20px",fontWeight:"bold",marginTop:"15px"}}>Graphic Design</p>
                   <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default service;
