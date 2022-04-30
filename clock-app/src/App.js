import React, {useEffect, useRef} from 'react';

import './App.css';

function App() {

    const deg = 6;
    const hour = useRef(null)
    const minute = useRef(null)
    const second = useRef(null)

    useEffect(() => {
        setInterval(() => {
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hour.current.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
            minute.current.style.transform = `rotateZ(${mm}deg)`;
            second.current.style.transform = `rotateZ(${ss}deg)`;
        }, 1000)
    }, [])

    return (
        <>
            <div className="clock">
                <div className="hour">
                    <div className="hr" id="hr" ref={hour}>
                    </div>
                </div>
                <div className="min">
                    <div className="mn" id="mn" ref={minute}>
                    </div>
                </div>
                <div className="sec">
                    <div className="sc" id="sc" ref={second}>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
