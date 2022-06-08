import React from "react";
import "./productAlert.css";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
const ProductAlert = () => {
  return (
    <div className='alert'>
      <h2>
        Product Alert
        <IconButton>
          <span style={{ color: "#87459E", fontSize: "14px" }}> Refresh</span>
          <RefreshIcon style={{ color: "#87459E" }} />
        </IconButton>
      </h2>
      <div className='productBottom'>
        <div className='first'>
          <div className='firstRight'>
            <h3>Emzor Paracetamol - 24 units left</h3>
            <h5>You need to restock!</h5>
          </div>
          <div className='firstLeft'>
            <h3>8:45 PM</h3>
          </div>
        </div>
        <div className='second'>
          <div className='secondRight'>
            <h3>Flagil - 10 units left</h3>
            <h5>You need to restock!</h5>
          </div>
          <div className='secondLeft'>
            <h3>7:15 AM</h3>
          </div>
        </div>
        <div className='third'>
          <div className='thirdRight'>
            <h3>Augumentine - 0 units left</h3>
            <h5>You need to restock!</h5>
          </div>
          <div className='thirdLeft'>
            <h3>7:00 AM</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAlert;
