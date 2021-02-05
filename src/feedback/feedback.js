import React from 'react'
import comma from '../images/comma.png';
import Background from '../images/background.jpg';
function feedback() {
    return (
        <div>
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <img src={comma}/>
                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
                    <div className="row">
                        <img style={{height:"40px", width:"40px",borderRadius:"50%"}} src={Background}/>
                        <p><span>Md Nirob</span><br/>CEO,Kids & Gadget</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={comma}/>
                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. </p>
                    <div className="row">
                        <img style={{height:"40px", width:"40px",borderRadius:"50%"}} src={Background}/>
                        <p><span>Md Nirob</span><br/>CEO,Kids & Gadget</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default feedback;

