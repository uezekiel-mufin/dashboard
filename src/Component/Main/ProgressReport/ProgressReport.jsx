import React from "react";
import Slider from "@mui/material/Slider";
import "./progress.css";
import { Button } from "@mui/material";
const ProgressReport = () => {
  return (
    <div className='progressDiv'>
      <div className='progress'>
        <h2
          style={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#000000",
          }}
        >
          Progress
        </h2>
        <h2
          style={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#000000",
          }}
        >
          60%
        </h2>
      </div>
      <div className='slider'>
        <Slider style={{ color: "#87459E" }} />
      </div>
      <div
        className='text'
        style={{ fontSize: "10px", lineHeight: "13px", color: "#8C8C8C" }}
      >
        You reached 60% of your monthly Sales Target. Weldone!
      </div>
      <Button variant='contained' style={{ background: "#87459E" }}>
        Download
      </Button>
    </div>
  );
};

export default ProgressReport;
