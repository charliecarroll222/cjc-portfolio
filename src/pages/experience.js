import React, { useState } from "react";
import './experience.css';

function Resume() {

  return (
    <div className="frames-container">
      <div className="resume-box">
        <h3 className="box-title">--   Resume   --</h3>
        <iframe
          src="/CJC-SWE-RESUME.pdf"
          width="100%" 
          height="90%"
          style={{border: 'none'}}
          title="Resume"
        />
      </div>
      <div className="github-box">
      <h3 className="box-title">--   Github Profile   --</h3>
        <iframe
          src="https://github.com/charliecarroll222"
          width="100%" 
          height="90%"
          style={{border: 'none'}}
          title="GitHub Profile"
        />
      </div>
    </div>
  );
}

export default Resume;