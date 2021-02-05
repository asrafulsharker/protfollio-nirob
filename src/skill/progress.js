import React from 'react';
import './skill.css';
function Progress({done}) {
    const [style, setStyle] = React.useState({});
    setTimeout(()=>{
        const newStyle={
            opacity:1,
            width:`${done}%`
        }
        setStyle(newStyle);
    },1000);
    return (
        <div>
                <div className="progress">
                    <div className="progress-done" data-done="70" style={style}>
                        {done}%
                    </div>
                </div>
        </div>
    )
}

export default Progress;
