import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import "./progress.css";
import { Button } from "@mui/material";
const ProgressReport = () => {
  const [progress, setProgress] = useState("");

  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
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
          {value}%
        </h2>
      </div>
      <div className='slider'>
        <Slider
          value={typeof value === "number" ? value : 0}
          onChange={handleSliderChange}
          style={{ color: "#87459E" }}
        />
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
