import React from 'react'
import Img1 from '../images/background.jpg';
function contact() {
    return (
        <div className="" style={{padding:"80px 190px"}}>
            <div className="row">
                <div className="col-md-6">
                    {/* <img src={Img1} style={{width:"100%"}}/> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.503672186984!2d90.77352494041415!3d23.536964862289828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37545afa72a33c65%3A0x2716ab1ebd9ba59f!2sGouripur%20Bus%20Stand%20Jaame%20Masjid!5e0!3m2!1sen!2sbd!4v1612692682275!5m2!1sen!2sbd"  frameborder="0" style={{border:"0",width:"100%",height:"100%"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="col-md-6" style={{padding:"30px 0px"}}>
                    <div className="container">
                        <p style={{fontSize:"20px"}}>We give solution</p>
                        <p style={{fontSize:"35px",fontWeight:"bold",paddingBottom:"20px"}}><span >If you have any questions</span><br/>
                        <span>please don't hesitate to contact us</span></p>
                        <form  className="container">
                            <div className="row">
                            <input  type="text" style={{width:"46.5%",marginLeft:"0px",height:"50px",paddingLeft:"10px"}} placeholder="Name"/>
                            <input  style={{width:"46.5%",height:"50px",marginLeft:"20px",paddingLeft:"10px"}} type="email" placeholder="Email"/>
                            <textarea style={{width:"96%",marginTop:"20px",paddingLeft:"10px"}} rows="4" cols="50" name="comment" placeholder="Massage" form="usrform"/>
                            <button style={{width:"96%",background:"rgb(0, 219, 172)",color:"white",border:"none",height:"50px",marginTop:"20px"}} type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <script type="text/javascript" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14631.503672186984!2d90.77352494041415!3d23.536964862289828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37545afa72a33c65%3A0x2716ab1ebd9ba59f!2sGouripur%20Bus%20Stand%20Jaame%20Masjid!5e0!3m2!1sen!2sbd!4v1612692682275!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></script> */}
           
        </div>
    )
}

export default contact
