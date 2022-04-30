import React from 'react';

import './App.css';

function App() {
  return (
    <>
      <div className="clock">
          <div className="hour">
              <div className="hr" id="hr">
              </div>
          </div>
          <div className="min">
              <div className="mn" id="mn">
              </div>
          </div>
          <div className="sec">
              <div className="sc" id="sc">
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
