import React from 'react'
import Img1 from '../images/background.jpg';
function contact() {
    return (
        <div className="" style={{padding:"80px 190px"}}>
            <div className="row">
                <div className="col-md-6">
                    <img src={Img1} style={{width:"100%"}}/>
                </div>
                <div className="col-md-6">
                    <div className="container">
                        <p>We give solution</p>
                        <p>If you have any questions
                        please don't hesitate to contact us</p>
                        <form  className="container">
                            <div className="row">
                            <input  type="text" style={{width:"47%",marginLeft:"0px",height:"50px"}} placeholder="Name"/>
                            <input  style={{width:"47%",height:"50px",marginLeft:"20px"}} type="text" placeholder="Name"/>
                            <input  maxlength="40"   style={{width:"96%",height:"50px",marginTop:"20px"}} type="text" placeholder="Name"/>
                            <button style={{width:"96%",background:"rgb(0, 219, 172)",color:"white",border:"none",height:"50px",marginTop:"20px"}} type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
