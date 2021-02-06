import React from 'react'
import Img1 from '../images/background.jpg';
function contact() {
    return (
        <div className="container">
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
                            <input className="col-md-6" type="text" style={{width:"80%",marginLeft:"20px",height:"50px"}} placeholder="Name"/>
                            <input className="col-md-6"  style={{width:"80%",height:"50px",marginLeft:"20px"}} type="text" placeholder="Name"/>
                            <input className="col-md-12"  style={{width:"500px",height:"50px",marginTop:"20px"}} type="text" placeholder="Name"/>
                            <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
