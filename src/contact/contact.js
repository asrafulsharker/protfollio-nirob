import React from 'react'
import Img1 from '../images/background.jpg';
function contact() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src={Img1} style={{width:"100%"}}/>
                </div>
                <div className="col-md-6">
                    <div className="container">
                        <p>We give solution</p>
                        <p>If you have any questions
                        please don't hesitate to contact us</p>
                        <form >
                            <div className="row">
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Name"/>
                            </div>
                            <input type="text" placeholder="Name"/>
                            <button type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
